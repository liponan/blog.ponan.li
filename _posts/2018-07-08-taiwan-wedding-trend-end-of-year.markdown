---
layout: post
title:  "The myth of Taiwanese couples getting married at the end of the year"
date:   2018-07-08 15:00:00 -0700
published: true
categories: [python "data science"]
---

Note: This post is an English version excerpt of [an article published on 2017/12/03](http://blog.ponan.li/post/2017/12/03/wedding-trend-end-of-year/), which was originally written in Chinese.

Author: Po-Nan Li

The other day I was chatting with my wife and both of us felt that there have been so many people either attending a wedding or themselves getting married lately at the end of the year.
As a researcher, I definitely cannot say it's just my feeling; instead, I should try to find some evidences to back this conjecture!  
After some simple research by googling, I quickly find this [very nice webpage](https://www.moi.gov.tw/stat/chart.aspx?ChartID=S0703) by Taiwanese government's Department of Statistics, Ministry of Interior, which, surprisingly, includes a basic visualization feature.
With the help of this online tool, we instantly prove that indeed that the marriage trend in Taiwan is like a periodic function and hits peaks at every year's end.

I shared this finding with some of my data science buddies and got some feedbacks, the most intriguing one being that they wonder if Taiwanese couples are actually not getting married at the end of the year; instead, would it be more precise to say that they strive to doing this before the end of a **lunar year**?
In Taiwan, while the official calendar system is the Gregorian calendar, most of the people also observe the "Farmer's calendar," a type of lunar calendar.
Dates of most of the official holidays in Taiwan observe the farmer's calendar and most Taiwanese people believe the farmer's calendar better reflects the climate change.
For example, Taiwaneses celebrate "new year" in the mid-January or February, as the farmer's calendar is usually one to two months behind the Gregorian, which is solar-based.

If I can further show that Taiwan indeed tend to get married at the end of the lunar year, I happen to also prove that a Taiwanese proverb is true: *No matter you have money or not, you get to get a wife before the new year*.

To this end, I need to find more structured statistical data with larger extend of years.
Fortunately Taiwan's Ministry of Interior saves the day again.
[Their Website](http://statis.moi.gov.tw/micst/stmain.jsp?sys=100) provides an interactive tool that allows one to execute queries on Taiwan's statistical data.
To systematically download all the available data, I kind of "hacked" the system by figuring out their patterns in the URL and was able to write a crawler that downloaded all of the data I wanted.
At the end of the day I got all the vital records that range from January of 1994 all the way to October of 2017, which total 286 months of statistics.

In order to be able to convert the dates to the corresponding farmer's calendar dates, I used [python-lunardate](https://github.com/lidaobing/python-lunardate) by lidaobing on GitHub.
Then, I determined each data point's corresponding lunar data by the last day in that month. (Pro tip: use `calendar.monthrange()` to query number of days in a given month)

The result is hardly surprising: it is true that the peak of each year's marriage records falls in farmer's calendar's 11th, 12th or 1st month.
It is understandable that there can be an error in determining the actual lunar month as we are mapping the statistics to the lunar calendar on a monthly basis.


## Number of newly wedded couples vs lunar month

![Number of newly wedded couples vs lunar month](/assets/img/2017/marriage_vs_year.png)
*Lower x-axis: solar year. Upper x-axis: lunar month. y-axis: thousand couples. The shaded bars indicate the peaks near the end of each lunar year.*

The plot above covers the range of October of 1997 till October of 2017, which total 240 monthly data points.
It is more than significant that there is a trend of getting married at the end of the year, either the lunar or solar one.
Interestingly, there are "secondary peak" in some of the year's middle, which are presumably attributed to the Taiwanese custom of avoiding getting married in the "ghost month," which happens on the 7th month in the farmer's calendar.  

N.B. Starting 5/23/2008, Taiwan's date of marriage changed from date of ceremony to date of registration.
This means that the statistics after that might not precisely reflect the date the couple actually held the wedding ceremony anymore, where as Taiwaneses think the ceremony date is way more important than the registration date and therefore has more constraints when picking the date.

## Number of newly wedded couples vs lunar year

![結婚對數與農曆年份的關係](/assets/img/2017/lichun_vs_lunar_year.png)
*Lower x-axis: solar year. Upper x-axis: Sexagenary cycle (ganzhi, かんし). y-axis: thousand couples. Solid circles: year of widow; Cross: year of loneliness (gū luán nián)*

So far we've talked about the marriage trend as a function of month.
How about as a function of year?
Are there some other years that couple would avoid?
In theory, yes.
Taiwanese people believe it is not blessed to get married in a year of loneliness (gū luán nián), which has two [*lichun*](https://en.wikipedia.org/wiki/Lichun), a solar term that typically happens on February 4th or one day before or after.
Some others also believe the year of widow (the year that doesn't have lichun) is not blessed either.
The story behind this somehow superstitious custom is the following: a lunar year is generally shorter than a solar.
In order ensure that the lunar calendar will not eventually fall behind its solar counterpart, the leap year in the lunar calendar will have leap months (versus a solar leap year has a leap day), making its length quite variable.
As a result, a lunar leap year tends to have more than one lichun while the others have not even have one.
Don't be confused!
Although lichun and other solar terms are written in the farmer's calendar and largely utilized by farmers, their dates are based on the solar calendar and are defined by the sun's celestial longitude!

To automatically find out which year is a year of loneliness and are not, I downloaded the [ephemeris](https://ssd.jpl.nasa.gov/?glossary&term=ephemeris) of the sun from the JPL HORIZONS, NASA's solar system data interface and analyze on which day the sun passes the celestial longitude of 315° for each year, which is the definition of lichun.
I put the results (counts of lichun in each year) in this [JSON](/assets/lichun_1950_2049.json), which you might find useful.

Ok so now we went through the background.
And the question was: do Taiwanese couples tend to avoid the year of loneliness (or year of widow)?
I found that if you really one to avoid all of the "unlucky" years, you only have five years to get married in every 19 years!
Surprisingly, I **don't find** any significant pattern that shows that the number of newly wedded couples decreases in the those unlucky years, despite the prevalence of this custom in the media.

## Number of newly wedded couples vs birth

![結婚數與出生人口的關係](/assets/img/2017/birth_vs_year.png)
*Lower x-axis: solar year. Upper x-axis: zodiac. y-axis (green): thousand births. y-axis (gray): thousand couples. Note the ticks of zodiac have offsets from the year ticks as the year of zodiac is based on lunar year.*

Finally, one might interested to see if there is any correlation between the marriage and birth records.
Well, maybe yes, but not significant enough for further discussion in my opinion.
What intrigues me is that the peaks of birth near the end of years of dragon and the relatively low number of births in the years of tiger. (tiger children are considered ominous)
These matches the general impression that some parents would "wait" a little bit so they can give birth of a dragon kid.
Interestingly but unsurprisingly, the acceptance rates of both high school and college entrances for the generation of dragon children (i.e. 15 years and 18 years after their birth) are noticeably low as they have more competitors.
Fun fact: my zodiac is dragon.
