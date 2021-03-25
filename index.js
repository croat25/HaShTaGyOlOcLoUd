const Shell = require('node-powershell');
// Import app settings here and pass in url or just get testcafefile to fetch it

//setup az linux console
//then send this to the linux console
//then simply run the script

// upload this whole folder along with the testcafe tests
// to azure blob

//scale this vm to something that can handle 4 scripts at a time
// #ClOuDcOmPuTiNg
//sperate process then is used for example this one
// to run it
const test = async (id) => {

    //before this install the browsers or 
    //pre install on vm
    for (let index = 0; index < 1; index++) {
      const ps = new Shell({
        executionPolicy: "Bypass",
        noProfile: true
      })

    //   if(id == "*chrome*")
    //   else if(id == "*edge*")
    //   else if(id == "*firefox*")
      ps.addCommand(`testcafe ${id} ./testcafe`)
      try {
        const result = await ps.invoke()
        // await sleep(1000)
        console.log("im result: %s", result)
      } catch (err) {
        console.log("err", err)
      } finally {
        await ps.dispose()
      }
      console.log("im id and index: %s %s", id, index)
    }
  }

setTimeout(() => {
    test('chrome:headless')
    test('firefox:headless')
    test('edge:headless')
    //im assuming this will be a guesstimate on how long our
    //project normally takes to run
}, 2000)

// #ThatsPrettyMuchTheJistOfIt#YOLO

// Signed #croat25