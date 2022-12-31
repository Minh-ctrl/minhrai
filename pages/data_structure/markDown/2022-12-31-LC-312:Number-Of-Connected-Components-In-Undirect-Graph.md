---
title: 'Leet Code 323: Number of Connected Components in an Undirected Graph'
taglines: '[Graph, Nodes]'
---


# Topic: 
*Graph, Union Find, Depth-First Search, Breadth-First Search*

___

Leetcode question goes the following:

![alt.text](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/60bb6b64-95a7-481e-8c9f-fdcf6e2e6270/dflji52-e88c6bb5-e48c-49ef-8664-a581ab1ff060.png/v1/fill/w_928,h_861,q_70,strp/screen_shot_2022_12_31_at_19_40_19_by_jimjet123_dflji52-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE4NyIsInBhdGgiOiJcL2ZcLzYwYmI2YjY0LTk1YTctNDgxZS04YzlmLWZkY2Y2ZTJlNjI3MFwvZGZsamk1Mi1lODhjNmJiNS1lNDhjLTQ5ZWYtODY2NC1hNTgxYWIxZmYwNjAucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FJ7xUyAwS1NpF1KIQaFp7WQBH7qXnzUq0zAHfMthOsg "just testing~")


Hoo boi, this one shows up at a technical interview i had not too long ago, I had no experience solving graph problems at the time so you can imagine how it went :).

### The code:

```py
def countComponents(self, n: int, edges):
    par = [i for i in range(n)]
    rank = [1] * n

    def find(n1):
        res = n1
        while res != par[res]:
            par[res] = par[par[res]]
            res = par[res]
        return res

    def union(n1, n2):
        p1, p2 = find(n1), find(n2)
        if p1 == p2:
            return 0
        if rank[p2] > rank[p1]:
            par[p1] = p2
            rank[p2] += rank[p1]
        else:
            par[p2] = p1
            rank[p1] += rank[p2]
        return 1
    res = n
    for n1, n2 in edges:
        res -= union(n1, n2)
    return res
```

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

```
@requires_authorization(roles=["ADMIN"])
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```