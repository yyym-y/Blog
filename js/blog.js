const one = document.querySelector('.one')
const two = document.querySelector('.two')
const there = document.querySelector('.there')
const content = document.querySelector('.content')
const inner = document.querySelector('.inner')
const find = document.querySelector('.find')
const get = document.querySelector('.get')
let info = [one, two, there]
let Type = 0
for(let i = 0 ; i < info.length ; i ++){
    info[i].addEventListener('click' ,function(){
        for(let j = 0 ; j < info.length ; j ++){
            info[j].style.backgroundColor = "#E5E5E6"
            info[j].style.borderStyle = "solid"
        }
        info[i].style.backgroundColor = "white"
        info[i].style.borderBottomStyle = "none"
        Type = i
    })
}

let blog = ['blogContent/blog/BFS(广度优先算法).html',
            'blogContent/blog/DFS(深度优先搜索算法).html',
            "blogContent/blog/yyym_'s formwork.html",
            'blogContent/blog/乘法逆元 + 模的除法.html',
            'blogContent/blog/动态规划 (Dynamic Programming).html',
            'blogContent/blog/埃式筛-欧拉筛(数论).html',
            'blogContent/blog/并查集 (Disjoint Set).html',
            'blogContent/blog/异或和快速求法.html',
            'blogContent/blog/树状数组 (Binary Indexed Tree).html',
            'blogContent/blog/求组合数的三种方法.html',
            'blogContent/blog/线段树 (Segment Tree).html']

let solution = ['blogContent/solution/Codeforces Round #841 (Div 2).html',
                'blogContent/solution/Codeforces Round #842 (Div. 2).html',
                'blogContent/solution/Codeforces Round #843 (Div. 2).html',
                'blogContent/solution/Codeforces Round #846 (Div. 2).html',
                'blogContent/solution/Codeforces Round #847 (Div. 3).html',
                'blogContent/solution/Codeforces Round #849 (Div. 4).html',
                'blogContent/solution/Codeforces Round #852 (Div. 2).html',
                'blogContent/solution/Codeforces Round #855 (Div. 3).html']

function getName(Url){
    let tem = Url.split("/")[2].split("."), Name = ""
    for(let i = 0 ; i < tem.length - 1; i++)
        Name += tem[i]
    return Name
}

function Add(Url){
    let Div1 = document.createElement('a')
    let Div2 = document.createElement('div')
    Div1.classList = "Out"
    Div2.classList = "Left-bar"
    if(Url.indexOf("#") !== -1)
        Div1.href = escape(Url)
    else
        Div1.href = Url
    Div1.appendChild(Div2)
    Div1.innerHTML = Div1.innerHTML +  getName(Url)
    content.appendChild(Div1)
}

function Create(){
    content.innerHTML = ""
    for(let i = 0 ; i < blog.length ; i++)
        Add(blog[i])
    for(let i = 0 ; i < solution.length ; i ++)
        Add(solution[i])
}

function getFromList(name, List){
    let have = []
    for(let i = 0 ; i < List.length ; i ++){
        if(List[i].indexOf(name) !== -1)
            have.push(List[i])
    }
    return have
}

function getList(name){
    let List1 = getFromList(name, blog)
    let List2 = getFromList(name, solution)
    if(Type == 0){
        let final = []
        for(let i = 0 ; i < List1.length ; i++) final.push(List1[i])
        for(let i = 0 ; i < List2.length ; i++) final.push(List2[i])
        return final
    }else if(Type == 1)
        return List1
    else return List2;
}

function Add2(Url){
    Div3 = document.createElement('div')
    a1 = document.createElement('a')
    a1.innerHTML = getName(Url)
    if(Url.indexOf("#") !== -1)
        a1.href = escape(Url)
    else
        a1.href = Url
    Div3.appendChild(a1)
    Div3.classList = "show"
    find.appendChild(Div3)
}

inner.oninput=function(){
    Create()
    let name = inner.value
    if(name == ""){
        find.innerHTML = ""
        return
    }
    let content = getList(name)
    find.innerHTML = ""
    for(let i = 0 ; i < content.length ; i++)
        Add2(content[i])
}

inner.onblur=function(){
    find.innerHTML = ""
}

get.addEventListener('click', function(){
    let name = inner.value
    let tem = getList(name)
    content.innerHTML = ""
    for(let i = 0 ; i < tem.length ; i++)
        Add(tem[i])
})
Create()
inner.style.userSelect = "all";