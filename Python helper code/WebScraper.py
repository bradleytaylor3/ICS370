import requests, bs4, csv

res = requests.get('https://www.metrostate.edu/academics/programs')
exampleSoup = bs4.BeautifulSoup(res.text, 'html.parser')

majors = exampleSoup.select('.metro--bdr-btm h4 a')
compiledMajorsData = []
namedMajors = []

for major in majors:
    compiledMajorsData.append([major.getText(),
        'https://www.metrostate.edu' + major.get('href') + '#requirments'])
    namedMajors.append(major.getText())

finalData = []
for courses in compiledMajorsData:
    requirementsLocater = requests.get(courses[1])
    reqSoup = bs4.BeautifulSoup(requirementsLocater.text, 'html.parser')
    requirements = reqSoup.select('.metro--course-block-header h3 a')
    reqsArray = []
    for req in requirements:
        reqsArray.append(req.getText())

    finalData.append([courses[0],reqsArray])

fields = ['major', 'requiredClasses']

filename = "Majors_and_Requirements.csv"

with open(filename, 'w') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    csvwriter.writerows(finalData)

fields = ['major']
filename = "Majors.csv"

with open(filename, 'w') as csvfile:
    csvwriter = csv.writer(csvfile)
    csvwriter.writerow(fields)
    csvwriter.writerows(namedMajors)