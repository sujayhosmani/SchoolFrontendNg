// import { InMemoryDbService } from "angular-in-memory-web-api";

// export class AllModulesData implements InMemoryDbService {
//   createDb() {
//     // Apps Module Contacts Database

//     let studentsList = [
//       {
//         id: 1,
//         idNo: "PRE1234",
//         name: "Aaliyah",
//         class: "10 A",
//         dob: "	2 Feb 2002",
//         parentName: "Jeffrey Wong",
//         mobileNumber: "097 3584 5870",
//         address: "911 Deer Ridge Drive,USA",
//       },
//       {
//         id: 2,
//         idNo: "PRE2153",
//         name: "Calvin",
//         class: "9 B",
//         dob: "	8 Dec 2003",
//         parentName: "	Minnie J Shaffer",
//         mobileNumber: "701 753 3810",
//         address: "1900 Hidden Meadow Drive, Crete",
//       },
//       {
//         id: 3,
//         idNo: "PRE1252",
//         name: "Joe Kelly",
//         class: "11 C",
//         dob: "	7 Oct 2000",
//         parentName: "Vincent Howard",
//         mobileNumber: "402 221 7523",
//         address: "3979 Ashwood Drive, Omaha",
//       },
//       {
//         id: 4,
//         idNo: "PRE2143",
//         name: "Levell Scott",
//         class: "10 A",
//         dob: "	12 Apr 2002",
//         parentName: "Jeffrey Scott",
//         mobileNumber: "026 7318 4366",
//         address: "P.O. Box: 41, Gaborone",
//       },
//       {
//         id: 5,
//         idNo: "PRE1534",
//         name: "Lois A",
//         class: "10 A",
//         dob: "22 Jul 2006",
//         parentName: "	Cleary Wong",
//         mobileNumber: "413 289 1314",
//         address: "2844 Leverton Cove Road, Palmer",
//       },
//       {
//         id: 6,
//         idNo: "PRE2213",
//         name: "Mallyne",
//         class: "8 A",
//         dob: "3 June 2010",
//         parentName: "Fields Malynne",
//         mobileNumber: "242 362 3100",
//         address: "	Bacardi Rd P.O. Box N-4880, New Providence",
//       },
//       {
//         id: 7,
//         idNo: "PRE2431",
//         name: "Minnie",
//         class: "11 C",
//         dob: "24 Feb 2000",
//         parentName: "J Shaffer",
//         mobileNumber: "952 512 4909",
//         address: "	4771 Oral Lake Road, Golden Valley",
//       },
//       {
//         id: 8,
//         idNo: "PRE1234",
//         name: "Nathan Humphries",
//         class: "10 B",
//         dob: "26 Apr 1994",
//         parentName: "Stephen Marley",
//         mobileNumber: "077 3499 9959",
//         address: "	86 Lamphey Road, Thelnetham",
//       },
//     ];
//     let teachersList = [
//       {
//         id: 1,
//         idNo: "PRE1234",
//         name: "NathanHumphries",
//         class: "10",
//         gender: "Male",
//         subject: "Biology",
//         section: "A",
//         mobileNumber: "077 3499 9959",
//         address: "86 Lamphey Road, Thelnetham",
//       },
//       {
//         id: 2,
//         idNo: "PRE1434",
//         name: "Vincent",
//         class: "10",
//         gender: "Male",
//         subject: "Mathematics",
//         section: "C",
//         mobileNumber: "402 221 7523",
//         address: "3979 Ashwood Drive, Omaha",
//       },
//       {
//         id: 3,
//         idNo: "PRE1534",
//         name: "Lois A",
//         class: "10",
//         gender: "Female",
//         subject: "English",
//         section: "B",
//         mobileNumber: "413 289 1314",
//         address: "2844 Leverton Cove Road, Palmer",
//       },
//       {
//         id: 4,
//         idNo: "PRE2143",
//         name: "Levell Scott",
//         class: "10",
//         gender: "	Male",
//         subject: "Science",
//         section: "B",
//         mobileNumber: "026 7318 4366",
//         address: "P.O. Box: 41, Gaborone",
//       },
//       {
//         id: 5,
//         idNo: "PRE2153",
//         name: "Calvin",
//         class: "9",
//         gender: "Male",
//         subject: "Mathematics",
//         section: "C",
//         mobileNumber: "701 753 3810",
//         address: "1900 Hidden Meadow Drive, Crete",
//       },
//       {
//         id: 6,
//         idNo: "PRE2209",
//         name: "Aaliyah",
//         class: "10",
//         gender: "Female",
//         subject: "Mathematics",
//         section: "A",
//         mobileNumber: "097 3584 5870",
//         address: "911 Deer Ridge Drive,USA",
//       },
//       {
//         id: 7,
//         idNo: "PRE2213",
//         name: "Mallyne",
//         class: "8",
//         gender: "Female",
//         subject: "Physics",
//         section: "A",
//         mobileNumber: "242 362 3100",
//         address: "Bacardi Rd P.O. Box N-4880, New Providence",
//       },
//       {
//         id: 8,
//         idNo: "PRE2345",
//         name: "Kozma Tatari",
//         class: "9",
//         gender: "Female",
//         subject: "Science",
//         section: "A",
//         mobileNumber: "04 2239 968",
//         address: "Rruga E Kavajes, Condor Center, Tirana",
//       },
//       {
//         id: 9,
//         idNo: "PRE2365",
//         name: "John Chambers",
//         class: "11",
//         gender: "Male",
//         subject: "Botony",
//         section: "B",
//         mobileNumber: "870 663 2334",
//         address: "4667 Sunset Drive, Pine Bluff",
//       },
//       {
//         id: 10,
//         idNo: "PRE2431",
//         name: "Minnie",
//         class: "11  ",
//         gender: "	Male",
//         subject: "History",
//         section: "C",
//         mobileNumber: "952 512 4909",
//         address: "4771 Oral Lake Road, Golden Valley",
//       },
//     ];
//     let departmentsList = [
//       {
//         id: 1,
//         idNo: "PRE1534",
//         name: "MCA",
//         hod: "Lois A",
//         startedYear: "1992",
//         noOfStudents: "200",
//       },
//       {
//         id: 2,
//         idNo: "PRE2143",
//         name: "Electrical Engg",
//         hod: "Levell Scott",
//         startedYear: "1994",
//         noOfStudents: "163",
//       },
//       {
//         id: 3,
//         idNo: "PRE2153",
//         name: "	BCA",
//         hod: "Calvin",
//         startedYear: "1992",
//         noOfStudents: "152",
//       },
//       {
//         id: 4,
//         idNo: "PRE2209",
//         name: "Computer Science Engg",
//         hod: "Aaliyah",
//         startedYear: "1995",
//         noOfStudents: "180",
//       },
//       {
//         id: 5,
//         idNo: "PRE2213",
//         name: "Mechanical Engg",
//         hod: "Malynne",
//         startedYear: "1999",
//         noOfStudents: "240",
//       },
//       {
//         id: 6,
//         idNo: "PRE2431",
//         name: "Civil Engg",
//         hod: "Minnie",
//         startedYear: "2000",
//         noOfStudents: "195",
//       },
//     ];
//     let subjectsList = [
//       {
//         id: 1,
//         idNo: "PRE1534",
//         name: "Botony",
//         class: "9",
//       },
//       {
//         id: 2,
//         idNo: "PRE2143",
//         name: "	Science",
//         class: "3",
//       },
//       {
//         id: 3,
//         idNo: "PRE2153",
//         name: "	English",
//         class: "4",
//       },
//       {
//         id: 4,
//         idNo: "PRE2209",
//         name: "	Mathematics",
//         class: "5",
//       },
//       {
//         id: 5,
//         idNo: "PRE2213",
//         name: "History",
//         class: "6",
//       },
//       {
//         id: 6,
//         idNo: "PRE2431",
//         name: "Geography",
//         class: "8",
//       },
//     ];
//     let feesCollection = [
//       {
//         id: 1,
//         idNo: "PRE1234",
//         name: "Nathan Humphries",
//         gender: "Male",
//         feesType: "Exam Fees",
//         amount: "278",
//         paidDate: "17 Nov 2020",
//         status: "Paid",
//       },
//       {
//         id: 2,
//         idNo: "PRE1252",
//         name: "Joe Kelly",
//         gender: "Female",
//         feesType: "Transport Fees",
//         amount: "237",
//         paidDate: "17 Oct 2020",
//         status: "Paid",
//       },
//       {
//         id: 3,
//         idNo: "PRE1434",
//         name: "Vincent",
//         gender: "Male",
//         feesType: "Mess Fees",
//         amount: "567",
//         paidDate: "05 Nov 2020",
//         status: "Paid",
//       },
//       {
//         id: 4,
//         idNo: "PRE1534",
//         name: "Lois A",
//         gender: "Male",
//         feesType: "Exam Fees",
//         amount: "56",
//         paidDate: "02 Oct 2020",
//         status: "Unpaid",
//       },
//       {
//         id: 5,
//         idNo: "PRE2143",
//         name: "Levell Scott",
//         gender: "Male",
//         feesType: "Exam Fees",
//         amount: "378",
//         paidDate: "04 Sept 2020",
//         status: "Paid",
//       },
//       {
//         id: 6,
//         idNo: "PRE2153",
//         name: "Calvin",
//         gender: "Male",
//         feesType: "Exam Fees",
//         amount: "236",
//         paidDate: "28 Oct 2020",
//         status: "Unpaid",
//       },
//       {
//         id: 7,
//         idNo: "PRE2209",
//         name: "Aaliyah",
//         gender: "Female",
//         feesType: "Mess Fees",
//         amount: "120",
//         paidDate: "17 Aug 2020",
//         status: "Paid",
//       },
//       {
//         id: 8,
//         idNo: "PRE2213",
//         name: "Malynne",
//         gender: "Female",
//         feesType: "Class Test",
//         amount: "56",
//         paidDate: "05 Aug 2020",
//         status: "Paid",
//       },
//       {
//         id: 9,
//         idNo: "PRE2345",
//         name: "Kozma Tatari",
//         gender: "Female",
//         feesType: "Exam Test",
//         amount: "564",
//         paidDate: "12 Nov 2020",
//         status: "Paid",
//       },
//       {
//         id: 10,
//         idNo: "PRE2365",
//         name: "John Chambers",
//         gender: "Male",
//         feesType: "Class Test",
//         amount: "234",
//         paidDate: "15 Nov 2020",
//         status: "Paid",
//       },
//       {
//         id: 11,
//         idNo: "PRE2431",
//         name: "Minnie",
//         gender: "Female",
//         feesType: "Exam Fees",
//         amount: "246",
//         paidDate: "17 Sept 2020",
//         status: "Unpaid",
//       },
//     ];
//     let expensesList = [
//       {
//         id: 1,
//         idNo: "PRE1252",
//         itemName: "Water Bottle",
//         itemQuality: "267",
//         amount: "237",
//         purchaseSource: "DJ Stationary",
//         purchaseDate: "17 Oct 2020",
//         purchaseBy: "Joe Kelley",
//       },
//       {
//         id: 2,
//         idNo: "PRE1534",
//         itemName: "Hard disk",
//         itemQuality: "2",
//         amount: "560",
//         purchaseSource: "Sony Center",
//         purchaseDate: "02 Oct 2020",
//         purchaseBy: "Lois A",
//       },
//       {
//         id: 3,
//         idNo: "PRE1536",
//         itemName: "Hard disk",
//         itemQuality: "3",
//         amount: "560",
//         purchaseSource: "music Center",
//         purchaseDate: "02 Oct 2020",
//         purchaseBy: "Lois A",
//       },
//       {
//         id: 4,
//         idNo: "PRE2143",
//         itemName: "Desk",
//         itemQuality: "6",
//         amount: "378",
//         purchaseSource: "Take Away",
//         purchaseDate: "04 Sept 2020",
//         purchaseBy: "Levell Scott",
//       },
//       {
//         id: 5,
//         idNo: "PRE2153",
//         itemName: "Note books",
//         itemQuality: "100",
//         amount: "236",
//         purchaseSource: "DJ Stationary",
//         purchaseDate: "28 Oct 2020",
//         purchaseBy: "Calvin",
//       },
//       {
//         id: 6,
//         idNo: "PRE2209",
//         itemName: "Chair",
//         itemQuality: "6",
//         amount: "120",
//         purchaseSource: "Abc Shop",
//         purchaseDate: "	17 Aug 2020",
//         purchaseBy: "Lois",
//       },
//       {
//         id: 7,
//         idNo: "PRE2213",
//         itemName: "Table",
//         itemQuality: "2",
//         amount: "56",
//         purchaseSource: "Online",
//         purchaseDate: "05 Aug 2020",
//         purchaseBy: "Malynne",
//       },
//       {
//         id: 8,
//         idNo: "PRE2431",
//         itemName: "Projector",
//         itemQuality: "1",
//         amount: "246",
//         purchaseSource: "Real Shop",
//         purchaseDate: "17 Sept 2020",
//         purchaseBy: "Minnie",
//       },
//     ];
//     let salaryList = [
//       {
//         id: 1,
//         idNo: "PRE1234",
//         name: "Nathan Humphries",
//         gender: "Male",
//         joiningDate: "	17 Nov 2020",
//         amount: "278",
//         status: "Paid",
//       },
//       {
//         id: 2,
//         idNo: "PRE1252",
//         name: "Joe Kelly",
//         gender: "Female",
//         joiningDate: "	17 Oct 2020",
//         amount: "237",
//         status: "Paid",
//       },
//       {
//         id: 3,
//         idNo: "PRE1434",
//         name: "Vincent",
//         gender: "Male",
//         joiningDate: "05 Nov 2020",
//         amount: "567",
//         status: "Paid",
//       },
//       {
//         id: 4,
//         idNo: "PRE1534",
//         name: "Lois A",
//         gender: "Male",
//         joiningDate: "02 Oct 2020",
//         amount: "560",
//         status: "Unpaid",
//       },
//       {
//         id: 5,
//         idNo: "PRE2143",
//         name: "Levell Scott",
//         gender: "Male",
//         joiningDate: "04 Sept 2020",
//         amount: "378",
//         status: "Paid",
//       },
//       {
//         id: 6,
//         idNo: "PRE2153",
//         name: "Calvin",
//         gender: "Male",
//         joiningDate: "28 Oct 2020",
//         amount: "236",
//         status: "Unpaid",
//       },
//       {
//         id: 7,
//         idNo: "PRE2209",
//         name: "Aaliyah",
//         gender: "Female",
//         joiningDate: "	17 Aug 2020",
//         amount: "320",
//         status: "Paid",
//       },
//       {
//         id: 8,
//         idNo: "PRE2213",
//         name: "Malynne",
//         gender: "Female",
//         joiningDate: "05 Aug 2020",
//         amount: "536",
//         status: "Paid",
//       },
//       {
//         id: 9,
//         idNo: "PRE2345",
//         name: "Kozma Tatari",
//         gender: "Female",
//         joiningDate: "12 Nov 2020",
//         amount: "564",
//         status: "Paid",
//       },
//       {
//         id: 10,
//         idNo: "PRE2365",
//         name: "John Chambers",
//         gender: "Male",
//         joiningDate: "15 Nov 2020",
//         amount: "234",
//         status: "Paid",
//       },
//       {
//         id: 11,
//         idNo: "PRE2431",
//         name: "Minnie",
//         gender: "Female",
//         joiningDate: "17 Sept 2020",
//         amount: "246",
//         status: "Unpaid",
//       },
//     ];
//     let holidayList = [
//       {
//         id: 1,
//         idNo: "PRE2143",
//         holidayName: "Annual Day",
//         type: "College Holiday",
//         startDate: "04 Sept 2020",
//         endDate: "07 Sept 2020",
//       },
//       {
//         id: 2,
//         idNo: "PRE2143",
//         holidayName: "Annual Day",
//         type: "College Holiday",
//         startDate: "04 Sept 2020",
//         endDate: "07 Sept 2020",
//       },
//       {
//         id: 3,
//         idNo: "PRE2209",
//         holidayName: "Sports Day",
//         type: "College Holiday",
//         startDate: "	17 Aug 2020",
//         endDate: "	19 Aug 2020",
//       },
//       {
//         id: 4,
//         idNo: "PRE2209",
//         holidayName: "Sports Day",
//         type: "College Holiday",
//         startDate: "	17 Aug 2020",
//         endDate: "	19 Aug 2020",
//       },
//       {
//         id: 5,
//         idNo: "PRE2213",
//         holidayName: "Memorial Day",
//         type: "Public Holiday",
//         startDate: "05 Aug 2020",
//         endDate: "06 Aug 2020",
//       },
//       {
//         id: 6,
//         idNo: "PRE2213",
//         holidayName: "Memorial Day",
//         type: "Public Holiday",
//         startDate: "05 Aug 2020",
//         endDate: "06 Aug 2020",
//       },
//       {
//         id: 7,
//         idNo: "PRE2431",
//         holidayName: "Exam Holiday",
//         type: "Semester leave",
//         startDate: "17 Sept 2020",
//         endDate: "30 Sept 2020",
//       },
//       {
//         id: 8,
//         idNo: "PRE2431",
//         holidayName: "Exam Holiday",
//         type: "Semester leave",
//         startDate: "17 Sept 2020",
//         endDate: "30 Sept 2020",
//       },
//     ];
//     let feesList = [
//       {
//         id: 1,
//         idNo: "PRE1234",
//         feesName: "Class Test Fees",
//         class: "5",
//         amount: "242",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 2,
//         idNo: "PRE1434",
//         feesName: "Sports Day Fees",
//         class: "6",
//         amount: "341",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 3,
//         idNo: "PRE1534",
//         feesName: "Exam Fees",
//         class: "7",
//         amount: "265",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 4,
//         idNo: "PRE2143",
//         feesName: "Exam Fees",
//         class: "9",
//         amount: "545",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 5,
//         idNo: "PRE2153",
//         feesName: "Sports Day Fees",
//         class: "2",
//         amount: "334",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 6,
//         idNo: "PRE2209",
//         feesName: "Exam Fees",
//         class: "10",
//         amount: "345",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 7,
//         idNo: "PRE2213",
//         feesName: "Exam Fees",
//         class: "1",
//         amount: "255",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 8,
//         idNo: "PRE2345",
//         feesName: "Exam Fees",
//         class: "12",
//         amount: "365",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 9,
//         idNo: "PRE2365",
//         feesName: "Annual Day Fees",
//         class: "11",
//         amount: "83",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//       {
//         id: 10,
//         idNo: "PRE2431",
//         feesName: "Sports Day Fees",
//         class: "8",
//         amount: "234",
//         startDate: "23 Apr 2020",
//         endDate: "28 Apr 2020",
//       },
//     ];
//     let examList = [
//       {
//         id: 1,
//         examName: "Class Test",
//         class: "10",
//         subject: " English",
//         startTime: "10:00",
//         endTime: "01:00",
//         date: "23 Apr 2020",
//       },
//       {
//         id: 2,
//         examName: "Class Test",
//         class: "8",
//         subject: "Science",
//         startTime: "10:00",
//         endTime: "04:00",
//         date: "18 Sep 2020",
//       },
//       {
//         id: 3,
//         examName: "Class Test",
//         class: "2",
//         subject: " 	Biology",
//         startTime: "10:00   ",
//         endTime: "01:00",
//         date: "15 Oct 2020",
//       },
//       {
//         id: 4,
//         examName: "Class Test",
//         class: "12",
//         subject: " 	Mathematics",
//         startTime: "10:00   ",
//         endTime: "01:00",
//         date: "23 Apr 2020",
//       },
//       {
//         id: 5,
//         examName: "Half Yearly",
//         class: "1",
//         subject: "Botony  ",
//         startTime: "10:00   ",
//         endTime: "01:00",
//         date: "23 Apr 2020",
//       },
//       {
//         id: 6,
//         examName: "Half Yearly",
//         class: "6",
//         subject: "Botony  ",
//         startTime: "10:00   ",
//         endTime: "01:00",
//         date: "02 Jun 2020",
//       },
//       {
//         id: 7,
//         examName: "Quaterly",
//         class: "9",
//         subject: "	Biology  ",
//         startTime: "01:00  ",
//         endTime: "04:00",
//         date: "26 Nov 2020",
//       },
//       {
//         id: 8,
//         examName: "Quaterly",
//         class: "7",
//         subject: "	History  ",
//         startTime: "01:00  ",
//         endTime: "04:00",
//         date: "23 Jul 2020",
//       },
//     ];
//     let timeTable = [
//       {
//         id: 1,
//         idNo: "PRE1534",
//         name: "Vincent",
//         class: "6",
//         subject: "Botony",
//         startTime: "10:00",
//         endTime: "01:00",
//         date: "02 Jun 2020",
//       },
//       {
//         id: 2,
//         idNo: "PRE2009",
//         name: "Lois A",
//         class: "7",
//         subject: "History",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "23 Jul 2020",
//       },
//       {
//         id: 3,
//         idNo: "PRE2143",
//         name: "Minnie",
//         class: "8",
//         subject: "Science",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "18 Sep 2020",
//       },
//       {
//         id: 4,
//         idNo: "PRE2153",
//         name: "Kozma Tatari",
//         class: "12",
//         subject: "Mathematics",
//         startTime: "10:00",
//         endTime: "01:00",
//         date: "23 Apr 2020",
//       },
//       {
//         id: 5,
//         idNo: "PRE2213",
//         name: "Levell Scott",
//         class: "9",
//         subject: "Biology",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "26 Nov 2020",
//       },
//       {
//         id: 6,
//         idNo: "PRE2309",
//         name: "Levell Scott",
//         class: "9",
//         subject: "Biology",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "26 Nov 2020",
//       },
//       {
//         id: 7,
//         idNo: "PRE2213",
//         name: "Levell Scott",
//         class: "9",
//         subject: "Biology",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "26 Nov 2020",
//       },
//       {
//         id: 8,
//         idNo: "PRE2009",
//         name: "Lois A",
//         class: "7",
//         subject: "History",
//         startTime: "01:00",
//         endTime: "04:00",
//         date: "23 Jul 2020",
//       },
//     ];
//     let library = [
//       {
//         id: 1,
//         idNo: "PRE1534",
//         name: "Acoustics",
//         language: "English",
//         department: "Science",
//         class: "10",
//         type: "Book",
//         status: "In Stock",
//       },
//       {
//         id: 2,
//         idNo: "PRE2009",
//         name: "Calculus",
//         language: "English",
//         department: "Mathematics",
//         class: "9",
//         type: "Book",
//         status: "In Stock",
//       },
//       {
//         id: 3,
//         idNo: "PRE2143",
//         name: "Chess",
//         language: "English",
//         department: "General",
//         class: "7",
//         type: "Book",
//         status: "Out Of Stock",
//       },
//       {
//         id: 4,
//         idNo: "PRE2153",
//         name: "Robotics",
//         language: "English",
//         department: "Science",
//         class: "10",
//         type: "Book",
//         status: "Out Of Stock",
//       },
//       {
//         id: 5,
//         idNo: "PRE2209",
//         name: "Acoustics",
//         language: "Geometry",
//         department: "Science",
//         class: "8",
//         type: "Book",
//         status: "In Stock",
//       },
//       {
//         id: 6,
//         idNo: "PRE2213",
//         name: "Games",
//         language: "English",
//         department: "General",
//         class: "9",
//         type: "Book",
//         status: "In Stock",
//       },
//       {
//         id: 7,
//         idNo: "PRE2309",
//         name: "Acoustics",
//         language: "English",
//         department: "Science",
//         class: "10",
//         type: "Book",
//         status: "In Stock",
//       },
//       {
//         id: 8,
//         idNo: "PRE2431",
//         name: "Visual Basic",
//         language: "English",
//         department: "Computer Science",
//         class: "11",
//         type: "Book",
//         status: "Out Of Stock",
//       },
//     ];
//     let sports = [
//       {
//         id: 1,
//         idNo: "PRE1534",
//         name: "	Hockey",
//         coach: "Thomas",
//         startedYear: "2005",
//       },
//       {
//         id: 2,
//         idNo: "PRE2009",
//         name: "Carrom",
//         coach: "Joseph",
//         startedYear: "2002",
//       },
//       {
//         id: 3,
//         idNo: "PRE2143",
//         name: "Volleyball",
//         coach: "Thomas",
//         startedYear: "2006",
//       },
//       {
//         id: 4,
//         idNo: "PRE2153",
//         name: "Volleyball",
//         coach: "Joseph",
//         startedYear: "2003",
//       },
//       {
//         id: 5,
//         idNo: "PRE2209",
//         name: "Cricket",
//         coach: "Jenny",
//         startedYear: "2002",
//       },
//       {
//         id: 6,
//         idNo: "PRE2213",
//         name: "Basketball",
//         coach: "Jenny",
//         startedYear: "2002",
//       },
//       {
//         id: 7,
//         idNo: "PRE2309",
//         name: "Cricket",
//         coach: "Jenny",
//         startedYear: "2002",
//       },
//       {
//         id: 8,
//         idNo: "PRE2431",
//         name: "Football",
//         coach: "Joseph",
//         startedYear: "2002",
//       },
//     ];
//     let hostel = [
//       {
//         id: 1,
//         block: "A Block",
//         roomNo: "101",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Full",
//       },
//       {
//         id: 2,
//         block: "A Block",
//         roomNo: "101",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Available",
//       },
//       {
//         id: 3,
//         block: "A Block",
//         roomNo: "102",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Full",
//       },
//       {
//         id: 4,
//         block: "B Block",
//         roomNo: "104",
//         roomType: "Big",
//         noOfBeds: "8",
//         costPerBed: "10",
//         availability: "Full",
//       },
//       {
//         id: 5,
//         block: "A Block",
//         roomNo: "107",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Available",
//       },
//       {
//         id: 6,
//         block: "A Block",
//         roomNo: "108",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Available",
//       },
//       {
//         id: 7,
//         block: "B Block",
//         roomNo: "102",
//         roomType: "Medium",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "2 Available",
//       },
//       {
//         id: 8,
//         block: "B Block",
//         roomNo: "107",
//         roomType: "Small",
//         noOfBeds: "6",
//         costPerBed: "10",
//         availability: "Available",
//       },
//     ];
//     let transport = [
//       {
//         id: 1,
//         routeName: "New Cross",
//         vehicleNumber: "TN 43 AS 5263",
//         driverName: "Steve",
//         driverLicense: "REDH968532",
//         contactNumber: "+91 8974158962",
//         driverAddress: "152, South Pole, 2nd Street, 3rd Cross",
//       },
//       {
//         id: 2,
//         routeName: "North Pole",
//         vehicleNumber: "TN 34 DB 5847",
//         driverName: "Akbar",
//         driverLicense: "RGTH958932",
//         contactNumber: "+91 8596841252",
//         driverAddress: "253, 2nd Street, 3rd Crosst",
//       },
//       {
//         id: 3,
//         routeName: "South Wales",
//         vehicleNumber: "TN 34 AK 6789",
//         driverName: "Joseph",
//         driverLicense: "DLFH985632",
//         contactNumber: "+91 9658741526",
//         driverAddress: "741, East Road, 2nd Street",
//       },
//     ];
//     let events = [
//       { id: 1, title: "event 1", date: "2020-12-01", className: "bg-purple" },
//       { id: 2, title: "event 2", date: "2020-12-17", className: "bg-success" },
//     ];

//     return {
//       studentsList: studentsList,
//       teachersList: teachersList,
//       departmentsList: departmentsList,
//       subjectsList: subjectsList,
//       feesCollection: feesCollection,
//       expensesList: expensesList,
//       salaryList: salaryList,
//       holidayList: holidayList,
//       feesList: feesList,
//       examList: examList,
//       timeTable: timeTable,
//       library: library,
//       sports: sports,
//       hostel: hostel,
//       transport: transport,
//       events: events,
//     };
//   }
// }
