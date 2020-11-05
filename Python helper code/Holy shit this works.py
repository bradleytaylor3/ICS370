import csv

finalData = []
majorNames = []
id = 0
majorName = ''

with open('Majors.csv') as csvFile:
    csvReader = csv.reader(csvFile)
    for row in csvReader:
        majorName = row[1]
        id = row[0]
        with open('majors/' + majorName + '.csv') as csvFile:
            csvReader2 = csv.reader(csvFile)
            for data in csvReader2:
                if (len(data) > 1):
                    for course in data:
                        courseName = course.split(' ')[0] + '-' + course.split(' ')[1]
                        with open('courses.csv') as csvFile3:
                            csvReader3 = csv.reader(csvFile3)
                            for dataRow in csvReader3:
                                if (courseName == dataRow[1]):
                                   finalData.append([id, dataRow[0]])

with open('majors to courses relation.csv', 'w') as csvfile:
    csvwriter = csv.writer(csvfile)
    for datum in finalData:
        csvwriter.writerow(datum)