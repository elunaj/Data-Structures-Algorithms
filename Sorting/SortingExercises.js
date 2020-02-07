//Choose the best sorting option

//#1 - Sort 10 schools around your house by distance:
small input, school addresses could be considered "sorted" - insertion sort

//#2 - eBay sorts listings by the current Bid amount:
fixed numbers/ints that need to be sorted - radix or counting sort

//#3 - Sort scores on ESPN
number types vary for different sports - quick sort

//#4 - Massive database (can't fit all into memory)
//needs to sort through past year's user data
more performant for external data sorts - merge sort

//#5 - Almost sorted Udemy review data needs to update
//and add 2 new reviews
nearly sorted data - insertion sort

//#6 - Temperature Records for the past 50 years in Canada
if no decimal places - radix or counting 
otherwise better in memory sorting needed - quick sort

//#7 - Large user name database needs to be sorted. Data is very random
avoid potential quicksort worst-case o(n^2) - mergesort
if good pivot chosen - quick sort

//#8 - You want to teach sorting for the first time
Academic sorts - bubble sort, selection sort