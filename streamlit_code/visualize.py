# import streamlit as sl
# import pandas as pd
# import numpy as np

# sl.title("Hypertension Risk Prediction")
# sl.subheader("Dashboard")

# data = pd.read_csv('../../Assets/heart-cases-location-data.csv', usecols=['longitude','latitude'])
# data.dropna()
# sl.map(data)


from collections import OrderedDict

test = OrderedDict()
test['A'] = 1
test['B'] = 2
test['C'] = 3
print(test)
print(test[list(test.keys())[0]])