---
title: 'Leet Code 49: Group Anagrams'
taglines: '[String manipulation, HashMap]'
---




# Topic: 
*Hashmap, String Manipulation, Array, Sorting*
___

Leetcode question goes the following:

![alt.text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60bb6b64-95a7-481e-8c9f-fdcf6e2e6270/dfl55i0-f00d4a1d-0c64-4d0c-b3ee-e55e57b41ea8.png/v1/fill/w_1280,h_1020,q_80,strp/group_anagrams_by_jimjet123_dfl55i0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyMCIsInBhdGgiOiJcL2ZcLzYwYmI2YjY0LTk1YTctNDgxZS04YzlmLWZkY2Y2ZTJlNjI3MFwvZGZsNTVpMC1mMDBkNGExZC0wYzY0LTRkMGMtYjNlZS1lNTVlNTdiNDFlYTgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.yVCX5fm5ALRsm_Ri4Az0W-VdJIyXUG3NYIAkX_SHNbI "just testing~")


This is an "upgraded" version of the classic *anagram* problem where you compare strings and see if they are anagrams of each other.

But this time, you're asked to sort all *possible anagram groups* into their *separate sub-array*.

So let's get down to the *basics* first: 
# *what is an anagram?*
Simply put, an anagram is a *collection of words* that when we *rearrange the individual letters* in any *word* will result in *another* word.

So for example, we'd have *"ate" === "eat"* as an example of anagrams group. other examples include:
1. *"Fried" === "Fired"*
2. *"Gainly" === "Laying"*
3. *"Sadder" === "Dreads"*
4. *"Listen" === "Silent"*

It's worth pointing out that they aren't necessarily *pairs*, 3 words or more anagram groups do exist out there such as:
* *"ANEW"* === *"WANE"* === *"WEAN"*

well, the "words" in these questions aren't words FYI.

___


## Back to the problem. 

### Input and Output:
we are given an array that contains string elements within it:
```py
    strs = ["eat","tea","tan","ate","nat","bat"]
```
From this *input* we are asked to sort all the anagram groups that exists within the array into sub-arrays. 
Taken into practice, it would look something like this.
```py
    Output = [["bat"],["nat","tan"],["ate","eat","tea"]]
```

### Contrainsts
* 1 <= *strs.length* <= 104  -> **the length of input is between 1 to 104 elements.**
* 0 <= *strs[i].length* <= 100 -> **each individual string are between 0 to 100 length.**
* *strs[i]* consists of lowercase English letters.

The only constraint we realistically care for is the last point. The letters will only be in *lowercase English letters*. 
Hold that information in mind, it will come up later.

We're done with *explaination*, let's get into *solution analysis*. 
<hr class="mt-4 mb-4"/>

### The Fool's Approach
so, let's first think of the solution on our own, what would be the most obvious solution that many would come up with?

-First obvious observation, anagrams must contain the same length of letters.


-Second, when sorted all the letters in order of a-z -->they should be exactly identical. example, *"ate" and "eat"* when sorted -> *"aet"*

--> So we can go through all the elements in the array *then* sort the letters *then* compare and *then* group them together. 

Doesn't sound like a bad idea right? let's see this "algorithm" in action below:


![alt.text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60bb6b64-95a7-481e-8c9f-fdcf6e2e6270/dfl5c2o-ecdb3206-2798-4e6c-81f1-d28b02652787.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYwYmI2YjY0LTk1YTctNDgxZS04YzlmLWZkY2Y2ZTJlNjI3MFwvZGZsNWMyby1lY2RiMzIwNi0yNzk4LTRlNmMtODFmMS1kMjhiMDI2NTI3ODcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dkfaOdSWXBPxNul5ckpLPtmhnBMu3vYPzI35pKmJspA "just testing~")

In this **particular input**, the first loop will give us *```["eat", "tea", "ate"]```*, then the 2nd will give us *```["tan","nat"]```* then finally *```["bat"]```*

so we'd ended up performing 2 or 3 operations per iteration. 

*BUTTTTTT*, to quote [CGP Grey](https://youtu.be/oAHbLRjF0vo):
```
    Solutions that are:
    1. First thing you think of
    2. Looks Sensible
    3. Easy to implement
    ----
    Are often: 
    1. Terrible.
    2. Ineffective Solutions.
    3. Will cause suffering.
    4. Why are we made to suffer?
```
### So why is this solution bad? 

**Answer: most sorting algorithm takes *O(nlogn)* in time complexity.** 

Therefore, we can deduce the complexity analysis of this solution: 

**The above approach yields us *O(m * nlog(n))* in time but *O(n)* in space complexity**

*m* here is the number of input strings given to us. 

That is HELLA slow.

Let's think of the **absolute worst scenario** for this solution, what if all the individual words are their own unique Anagram?

Then we'd have to sort each individual words (*m*) with *O(nlog(n))* complexity. within low length input, this might be acceptable. However, as the length of both Array and then individual words grow, this solution will be *very very verrrry slow.*

Here's a handy visualization for big O categorization:

![alt.text](https://qph.cf2.quoracdn.net/main-qimg-22c307bb694f518b82c515cd12c24920 "just testing~")
so obviously, *O(nlog(n))* isn't the *worst* but it ain't that good too. so how can we improve on this?

## A better solution

### part 1: Comparison

A faster way to compare the strings without resorting to sorting would be creating an array that counts the number individual letters. (stay with me, it'll make sense soon)
    
so imagine the array below with each element represent the *number of letters* in a particular word:

```py
count = [0 ,0 ,0 ,0 ,0, 0,0,0,0,0,0,0,...]
```

if the word was... **"bad"** then the *count* array would be:

```py
count =[1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,...]
```

But how long should this count array be in order to represent any words that the test throws our way? 

think back to the constraints, we are given only *lowercase* words so therefore the count array should be in 26 range representing all lowercase letters.

now if we use these array representation of words and compare them to each other, the comparison operation should take only O(n) each time.

ok we solved the pesky comparison problem, now how do we store these information effectively on each iteration?

### Enter HashMap

I won't go into details on Hashmap as a data structure put simply put ***hashmaps* are used to store key-value pairs for efficient retrieval.**

So let's say we create a hashmap that *stores* the *key* as the count and the value would be the array of anagramtic(?) words

```py
Hmap = {
    [1,1,0,1,0,0,0,...]: ['Bad'],
    [1,0,0,1,0,...]: ['ate','eat']
}
```

After inputting into *Hashmap*, we simply only have to return all the *values* then we'd have our answer :).




### The code:

```py
def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    res = defaultdict(list); #ignore the python jibber jabber, here we're just initializing the Hmap
    for s in strs:
        count = [0] * 26 
        for c in s:
            count[ord(c)- ord('a')] +=1 #ord built-in function calculates the unicode value of the character 
                                        # so --> unicode val of character - unicode of a gives the alphabetical order
        res[tuple(count)].append(s) #tuple is sub-array, again python syntax
    return res.values()
```

This solution gives us **O(n * m * 26 )** which is essentially **O(n * m)** both space and time complexity

Much faster than the "simple" method.

Anyway, that's all see ya!