import csv

finalData = []
majorNames = []
id = 0
majorName = ''

with open('secondary requirements/secondary_requirements.csv') as csvFile:
    csvReader = csv.reader(csvFile)
    for row in csvReader:
        id = row[0]
        requirementName = row[1]
        with open('secondary requirements/' + requirementName + '.csv') as csvFile:
            csvReader2 = csv.reader(csvFile)
            for data in csvReader2:
                print(data[0].split(' ')[0])
                # for course in data:
                #     print(course)
                    # courseName = course.split(' ')[0] + '-' + course.split(' ')[1]
                    # print(courseName)
                    # with open('courses.csv') as csvFile3:
                    #     csvReader3 = csv.reader(csvFile3)
                    #     for dataRow in csvReader3:
                    #         if (courseName == dataRow[1]):
                    #            finalData.append([id, dataRow[0]])

# print(finalData)

# with open('majors to courses relation.csv', 'w') as csvfile:
#     csvwriter = csv.writer(csvfile)
#     for datum in finalData:
#         csvwriter.writerow(datum)