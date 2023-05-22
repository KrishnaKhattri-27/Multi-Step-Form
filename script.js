const matter = [
    {
        'tag': "Personal info",
        'para': "Please provide your name, email address, and phone number."
    },

    {
        'tag': "Select your plan",
        'para': "You have the option of monthly or yearly billing."
    },

    {
        'tag': "Pick add-ons",
        'para': "Add-ons help enhance your gaming experience."
    },

    {
        'tag': "Finishing up",
        'para': "Double-check everything looks OK before confirming."
    }

];

let index = 0;
const head = document.querySelector(".upper-head")
const para = document.querySelector(".upper-para")
const class1 = document.querySelector(".ndpage1");
const class2 = document.querySelector(".ndpage2");
const class3 = document.querySelector(".ndpage3");
const class4 = document.querySelector(".ndpage4");
const class5 = document.querySelector(".finalpage");

const number1 = document.querySelector(".num1");
const number2 = document.querySelector(".num2");
const number3 = document.querySelector(".num3");
const number4 = document.querySelector(".num4");


const backbtn = document.getElementById('back');
const frontbtn = document.getElementById('next');
const btnch = document.querySelector(".btn")

number1.classList.add('give-color')
let cal=0;
let currency="mo"
const goback = () => {
    const data = matter[index - 1];
    head.innerHTML = data.tag;
    para.innerHTML = data.para;
    switch (index) {
        case 1:
            class2.classList.remove('show')
            class1.classList.remove('remove')
            number2.classList.remove('give-color')
            number1.classList.add('give-color')
            backbtn.classList.remove('show')
            btnch.classList.remove('flexspace')
            break;
        case 2:
            number3.classList.remove('give-color')
            number2.classList.add('give-color')
            class3.classList.remove('show')
            class2.classList.add('show')
            break;
        case 3:
            number4.classList.remove('give-color')
            number3.classList.add('give-color')
            class4.classList.remove('show')
            class3.classList.add('show')
            frontbtn.value = "Next Step"
            break;
        default:
            break;
    }
    index--;
}

const addon = document.querySelectorAll('.labelling')

let flag = 0;
const arcade = document.querySelector(".incfirst")
const advanced = document.querySelector(".incsecond")
const pro = document.querySelector(".incthird")
let month_name = " (Monthly)";
let final_name = "Total (per month)";








const selection = document.querySelectorAll('.inclass')
let flag1 = 0
let plan = "";
let plan_name = "";

selection.forEach((e) => {

    e.addEventListener('click', function () {
        if (flag1 === 1) {
            remove_selector();
        }
        e.classList.add('inclassadd')
        plan = e.firstElementChild.nextElementSibling.nextElementSibling.innerHTML;;
        plan_name = e.firstElementChild.nextElementSibling.innerHTML;
        cal=Number(e.firstElementChild.nextElementSibling.nextElementSibling.title);
        console.log(cal);
        flag3=1
        // console.log(plan);
        flag1 = 1
    })
})

const remove_selector = () => {
    selection.forEach((f) => {
        flag3=0
        f.classList.remove('inclassadd')
    })
}



let addon_name = ["", "", ""];
let addon_price = ["", "", ""];
let k = 0;
let j = 0;
let flag3=0
// const ad=ad

addon.forEach((e) => {
    const element = addon_name[k]
    const f = e.previousElementSibling
    f.addEventListener('click', () => {
        if (f.checked) {
            addon_name[k++] = e.firstElementChild.innerHTML
            addon_price[j++] = e.nextElementSibling.innerHTML
            cal=cal+Number(e.nextElementSibling.title);
            f.parentElement.classList.add('addpick')
            console.log(cal);
        }
        else if (!f.checked) {
            let a = addon_name.indexOf(f.nextElementSibling.firstElementChild.innerHTML)
            let b = addon_price.indexOf(e.nextElementSibling.innerHTML)
            cal=cal-Number(e.nextElementSibling.title);
            f.parentElement.classList.remove('addpick')
            console.log(cal);
            if (a == 1) {
                addon_name[a] = addon_name[a + 1]
                addon_name[a + 1] = ""
                addon_price[b] = addon_price[b + 1]
                addon_price[b + 1] = ""
            } else if (a == 0) {
                addon_name[a] = addon_name[a + 1]
                addon_name[a + 1] = addon_name[a + 2]
                addon_name[a + 2] = ""
                addon_price[b] = addon_price[b + 1]
                addon_price[b + 1] = addon_price[b + 2]
                addon_price[b + 2] = ""
            } else {
                addon_name[a] = ""
                addon_price[b] = ""
            }
            j--;
            k--;

        }

        console.log(j, k);
        console.log(addon_name);
        console.log(addon_price);
    })

})


const switchfn = () => {
    if (flag === 0) {
        arcade.lastElementChild.innerHTML = "$90/yr"
        advanced.lastElementChild.innerHTML = "$120/yr"
        pro.lastElementChild.innerHTML = "$150/yr"
        add(arcade);
        add(advanced);
        add(pro);
        document.getElementById('year').classList.add('colorchange')
        document.getElementById('month').classList.add('year')
        month_name = " (Yearly)"
        final_name = "Total (per year)";
        arcade.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","90");
        advanced.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","120");
        pro.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","150");
        addon[0].nextElementSibling.innerHTML="$10/yr"
        addon[1].nextElementSibling.innerHTML="$20/yr"
        addon[2].nextElementSibling.innerHTML="$30/yr"
        addon[0].nextElementSibling.setAttribute("title","10")
        addon[1].nextElementSibling.setAttribute("title","20")
        addon[2].nextElementSibling.setAttribute("title","30")
        currency="yr";
        cal=0;
        console.log(addon[0].nextElementSibling.innerHTML);
        for (let i = 0; i < 3; i++) {
            addon[i].previousElementSibling.checked=false;  
        }
        remove_selector();
        flag = 1
    }
    else if (flag === 1) {
        deletetext(arcade);
        deletetext(advanced);
        deletetext(pro);
        arcade.lastElementChild.innerHTML = "$9/mo"
        advanced.lastElementChild.innerHTML = "$12/mo"
        pro.lastElementChild.innerHTML = "$15/mo"
        document.getElementById('year').classList.remove('colorchange')
        document.getElementById('month').classList.remove('year')
        month_name = " (Monthly)"
        final_name = "Total (per month)";
        arcade.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","9");
        advanced.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","12");
        pro.firstElementChild.nextElementSibling.nextElementSibling.setAttribute("title","15");
        addon[0].nextElementSibling.innerHTML="$1/mo"
        addon[1].nextElementSibling.innerHTML="$2/mo"
        addon[2].nextElementSibling.innerHTML="$3/mo"
        addon[0].nextElementSibling.setAttribute("title","1")
        addon[1].nextElementSibling.setAttribute("title","2")
        addon[2].nextElementSibling.setAttribute("title","3")
        currency="mo";
        cal=0;
        remove_selector();
        // console.log(month_name);
        flag = 0
    }
}

const add = (e) => {
    let newtag = document.createElement("p")
    let textmatter = document.createTextNode("2 months free")
    newtag.append(textmatter)
    e.append(newtag)
    newtag.classList.add('color')
}

const deletetext = (e) => {
    e.lastChild.remove();
}


const select = (e) => {
    console.log(e);
}




const land = document.querySelector('.planname')

const hill = document.querySelectorAll('.finaleq')
const formdetail=document.querySelectorAll('.inp')


const submit = () => {
    index++;
    const data = matter[index];

  

    switch (index) {
        case 1:
            let flag2=0;
            formdetail.forEach((e)=>{
                if (e.value == "") {
                    // document.querySelectorAll('.warning').classList.add('show')
                    e.previousElementSibling.lastElementChild.classList.add('show')
                    e.classList.add('warningadd')
                    console.log("hl");
                    setTimeout(() => {
                        e.previousElementSibling.lastElementChild.classList.remove('show')
                        e.classList.remove('warningadd')
                        // console.log("hell");
                    }, 2000);
                    flag2=1
                }
            })
            if(flag2 ===1){
                index--;
                return;
            }
            class1.classList.add('remove')
            class2.classList.add('show')
            backbtn.classList.add('show')
            btnch.classList.add('flexspace')
            number1.classList.remove('give-color')
            number2.classList.add('give-color')

            break;
        case 2:
            if (flag3 === 0) {
                document.querySelector('.war2').classList.add('show')
                setTimeout(() => {
                    document.querySelector('.war2').classList.remove('show')

                }, 2000);
                index--
                return;
            }
            class2.classList.remove('show')
            class3.classList.add('show')
            number2.classList.remove('give-color')
            number3.classList.add('give-color')
            break;

        case 3:
            class3.classList.remove('show')
            class4.classList.add('show')
            number3.classList.remove('give-color')
            number4.classList.add('give-color')
            frontbtn.value = "Submit"
            land.firstElementChild.innerHTML = plan_name + month_name;
            land.nextElementSibling.innerHTML = plan;
            document.querySelector('.lowerndpage4').firstElementChild.innerHTML=final_name;
            let q = 0;
            let w = 0;
            hill.forEach((e) => {
                // adding_tag(e);
                e.firstElementChild.innerHTML = addon_name[q++]
                e.lastElementChild.innerHTML = addon_price[w++]
            })
            document.querySelector('.lowerndpage4').lastElementChild.innerHTML=`$${cal}/${currency}`
            break;

            case 4:
            class4.classList.remove('show')
            class5.classList.add('show')
            document.querySelector(".btn").classList.add('remove')
            document.querySelector(".upper").classList.add('remove')
            break;

        default:
            break;
    }
    if(index<4){
        head.innerHTML = data.tag;
    para.innerHTML = data.para;
    }
}


