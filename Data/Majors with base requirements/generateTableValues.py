import csv


with open('Majors_and_Requirements.csv', newline='') as csvFile:
    csvReader = csv.reader(csvFile)
    for row in csvReader:
        if row:
            filename = row[0] + '.csv'
            with open(filename, 'x') as csvfile:
                csvwriter = csv.writer(csvfile)
                csvwriter.writerow([row[0]])
                csvwriter.writerow(eval(row[1]))