const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(x=> {
      setTimeout(async () => {
          const res = await square(x)
          console.log(res)
      }, x * 1000)
  })
}

async function test() {
    for (let i = 0; i < list.length; i++) {
      let x = list[i]
      const res = await square(x)
      console.log(res)
    }
  }

test()