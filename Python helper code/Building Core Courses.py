import csv

data = []
name = []
with open('Economics BS.csv', newline='') as csvFile:
    csvReader = csv.reader(csvFile)
    for row in csvReader:
        name = row
        data = row

    for datum in data:
        print("<tr><td>" + datum + "</td></tr>")