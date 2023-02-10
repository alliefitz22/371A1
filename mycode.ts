console.log("Hello World")

type Course = {
  courseNumber: string;
  courseName: string;
  semesterTaken: string
}
const myCourses: Array<Course> = []

let class1: Course = {
  courseNumber: "HNR 151",
  courseName: "American Modern 1",
  semesterTaken: "Fall 2020"
}
let class2: Course = {
  courseNumber: "HNR 152",
  courseName: "American Modern 2",
  semesterTaken: "Fall 2020"
}
let class3: Course = {
  courseNumber: "US 102",
  courseName: "Career Education Class",
  semesterTaken: "Fall 2020"
}
let class4: Course = {
  courseNumber: "CIS 162",
  courseName: "Computer Science 1",
  semesterTaken: "Fall 2020"
}
  let class5: Course = {
  courseNumber: "CHM 115",
  courseName: "Principals of Chemistry 1",
  semesterTaken: "Fall 2020"
}
let class6: Course = {
  courseNumber: "HNR 153",
  courseName: "American Modern 3",
  semesterTaken: "Winter 2021"
}
let class7: Course = {
  courseNumber: "CIS 163",
  courseName: "Computer Science 2",
  semesterTaken: "Winter 2021"
}
let class8: Course = {
  courseNumber: "DS 201",
  courseName: "Digital Identities and Communities",
  semesterTaken: "Winter 2021"
}
let class9: Course = {
  courseNumber: "COM 201",
  courseName: "Speech",
  semesterTaken: "Winter 2021"
}
let class10: Course = {
  courseNumber: "HNR 154",
  courseName: "SWS American Civilization 4",
  semesterTaken: "Winter 2021"
}
myCourses.push(class1)
myCourses.push(class2)
myCourses.push(class3)
myCourses.push(class4)
myCourses.push(class5)
myCourses.push(class6)
myCourses.push(class7)
myCourses.push(class8)
myCourses.push(class9)
myCourses.push(class10)

const tArea4 = document.getElementById("table")
const table = document.createElement('table')
const tr = document.createElement('tr')
const th1 = document.createElement('th')
const th2 = document.createElement('th')
const th3 = document.createElement('th')
const col1Text = document.createTextNode('Course Number')
const col2Text = document.createTextNode('Course Name')
const col3Text = document.createTextNode('Semester')
tr.appendChild(th1).appendChild(col1Text)
tr.appendChild(th2).appendChild(col2Text)
tr.appendChild(th3).appendChild(col3Text)
table.append(tr)
tArea4?.append(table)

myCourses.forEach(course => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td')
  const td2 = document.createElement('td')
  const td3 = document.createElement('td')
  const col1 = document.createTextNode(course.courseNumber)
  const col2 = document.createTextNode(course.courseName)
  const col3 = document.createTextNode(course.semesterTaken)

  tr.appendChild(td1).appendChild(col1)
  tr.appendChild(td2).appendChild(col2)
  tr.appendChild(td3).appendChild(col3)
  table.appendChild(tr)
});
type Company = {
  name: string;        // Ex: "MSFT"
  abbreviation: string;   // Ex: Microsoft
  url: string             // Ex: https://microsoft.com
}
const myCompanies: Array<Company> = []
let company1: Company = {
  name: "Walmart",
  abbreviation: "WLMT",
  url: "https://www.walmart.com"
}
let company2: Company = {
  name: "Target",
  abbreviation: "TRGT",
  url: "https://www.Target.com"
}
let company3: Company = {
  name: "Meijer",
  abbreviation: "MJR",
  url: "https://www.Meijer.com"
}
myCompanies.push(company1)
myCompanies.push(company2)
myCompanies.push(company3)
const list = document.createElement('ul')
list.style.listStyle ="circle"
const lArea6 = document.getElementById("area6-list")
myCompanies.forEach(company => {
  const li = document.createElement('li')
  const comp = document.createTextNode(company.abbreviation)
  const link = document.createElement('a')
  link.href = company.url
  link.appendChild(comp)
  li.appendChild(link)
  list.appendChild(li)
})
lArea6.appendChild(list)

type SocialMedia = {
  icon: string;   // this can be a name of a local image or a URL to a remote image
  url: string;    // URL of the said social media company
}
let socialmedia1: SocialMedia = {
  icon: "fa fa-github",
  url: "https://github.com/home"
}
let socialmedia2: SocialMedia = {
  icon: "fa fa-twitter",
  url: "https://twitter.com/home"
}
let socialmedia3: SocialMedia = {
  icon: "fa fa-amazon",
  url: "https://www.amazon.com/home"
}
let socialmedia4: SocialMedia = {
  icon: "fa fa-instagram",
  url: "https://instagram.com"
}
let socialmedia5: SocialMedia = {
  icon: "fa fa-facebook-square",
  url: "https://facebook.com/home"
}
const socials: Array<SocialMedia> = []
socials.push(socialmedia1)
socials.push(socialmedia2)
socials.push(socialmedia3)
socials.push(socialmedia4)
socials.push(socialmedia5) 
const area8 = document.getElementById("area8-icons")
socials.forEach(iconElement => {
  const a = document.createElement('a')
  const i = document.createElement('i')
  a.href = iconElement.url
  i.className = iconElement.icon
  i.style.fontSize = "50px"
  //padding
  a.appendChild(i)
  area8.appendChild(a)
})

