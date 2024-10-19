# HW06

I chose Global Inflation (1970 - 2022):CSV.The dataset contains inflation data from different countries, with inflation rates listed for various years from 1970 to 2022. 


I want to make an **Inflation Burst Animation**: Each country's inflation rate could be visualized as expanding circles, where the size of the circle changes over time to reflect different years' inflation rates.
This is a README file that can be used to describe and document your assignment.


在写代码的过程中，我出现了几次报错，原因是有的国家在某一年没有数据，出现了数据遗失的情况。所以我使用condition语句来处理丢失的数据。
```
      if (rate !== "") {
        inflationRates.push(float(rate));
      } else {
        inflationRates.push(null); // Handle missing data
      }
```
```
    // Skip countries with no inflation data for the current year
    if (inflationRate === null) continue;
```


Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---
---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2024f-b.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

This is a new paragraph.
