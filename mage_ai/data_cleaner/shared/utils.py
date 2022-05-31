from mage_ai.data_cleaner.column_type_detector import (
    NUMBER,
    NUMBER_WITH_DECIMALS,
    DATETIME
)
from mage_ai.data_cleaner.transformer_actions.constants import CURRENCY_SYMBOLS
import pandas as pd
import numpy as np


def clean_series(series, column_type, dropna=True):
    series_cleaned = series.map(
        lambda x: x if (not isinstance(x, str) or (len(x) > 0 and not x.isspace())) else np.nan,
    )
    if dropna:
        series_cleaned = series_cleaned.dropna()
    
    if series_cleaned.count() == 0:
        return series_cleaned
    
    first_item = series_cleaned.dropna().iloc[0]
    if column_type == NUMBER:
        if type(first_item) is str:
            series_cleaned = series_cleaned.str.replace(',', '')
            if series_cleaned.str.contains(CURRENCY_SYMBOLS).sum() != 0:
                return # handle this case with reformat transform action
        try:
            series_cleaned = series_cleaned.astype(float).astype(int)
        except ValueError:
            series_cleaned = series_cleaned.astype(float)
    elif column_type == NUMBER_WITH_DECIMALS:
        if type(first_item) is str:
            series_cleaned = series_cleaned.str.replace(',', '')
            if series_cleaned.str.contains(CURRENCY_SYMBOLS).sum() != 0:
                return # handle this case with reformat transform action
        series_cleaned = series_cleaned.astype(float)
    elif column_type == DATETIME and type(first_item) is str:
        series_cleaned = pd.to_datetime(series, infer_datetime_format=True, errors='coerce')

    return series_cleaned


def clean_dataframe(df, column_types, dropna=True):
    return df.apply(
        lambda col: clean_series(col, column_types[col.name], dropna=dropna), 
        axis=0
    )
