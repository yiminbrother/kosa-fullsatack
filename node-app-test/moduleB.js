// 변수선언
export const moduleB_var1 = "moduleB_var1_value";

export const moduleB_fun1 = ()=>{
    console.log(`moduleB_fun2() 실행`);
};

const moduleB_fun2 = ()=>{
    console.log(`moduleB_fun2() 실행`);
};

// 객체로 담아서 내보내기
export default{
   moduleB_fun2
} ;

// 각이름 내보내기
// export{
//     moduleB_var1,
//     moduleB_fun1
// } ;