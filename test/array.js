const demo = async ()=>{
    let result = await setTimeout(()=>{
      console.log('我延迟了一秒');
    }, 1000)
    console.log('我由于上面的程序还没执行完，先不执行“等待一会”');
    return result
}
demo().then(result=>{
  console.log('输出',result);
})