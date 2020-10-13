import csv

gelsData = []
with open('rigr.csv', newline='') as csvFile:
    csvReader = csv.reader(csvFile)
    for row in csvReader:
        print("<tr><td>" + row[0].split(' ')[0] + "</td><td>" + row[1] + "</td><td>" + row[2] + "</td></tr>")