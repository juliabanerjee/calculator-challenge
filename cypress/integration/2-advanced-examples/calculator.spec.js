
describe("Display buttons when clicked and clearing console", () =>{
it("should check that 0 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__0").click()
  cy.get("#calculator__answerbox").should("contain", "0")
})
it("should check that 1 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__1").click()
  cy.get("#calculator__answerbox").should("contain", "1")
})
it("should check that 2 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__2").click()
  cy.get("#calculator__answerbox").should("contain", "2")
})
it("should check that 3 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__3").click()
  cy.get("#calculator__answerbox").should("contain", "3")
})
it("should check that 4 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__4").click()
  cy.get("#calculator__answerbox").should("contain", "4")
})
it("should check that 5 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__5").click()
  cy.get("#calculator__answerbox").should("contain", "5")
})
it("should check that 6 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__6").click()
  cy.get("#calculator__answerbox").should("contain", "6")
})
it("should check that 7 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__7").click()
  cy.get("#calculator__answerbox").should("contain", "7")
})
it("should check that 8 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__8").click()
  cy.get("#calculator__answerbox").should("contain", "8")
})
it("should check that 9 displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__9").click()
  cy.get("#calculator__answerbox").should("contain", "9")
})
it("should check that . displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__point").click()
  cy.get("#calculator__answerbox").should("contain", ".")
})
it("should check that + displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__plus").click()
  cy.get("#calculator__answerbox").should("contain", "+")
})
it("should check that - displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__minus").click()
  cy.get("#calculator__answerbox").should("contain", "-")
})
it("should check that * displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__times").click()
  cy.get("#calculator__answerbox").should("contain", "*")
})
it("should check that / displays on the screen", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__divide").click()
  cy.get("#calculator__answerbox").should("contain", "/")
})
it("should check that cleart button clears displays", ()=>{
  cy.visit("http://127.0.0.1:5501/index.html")
  cy.get("#calculator__divide").click()
  cy.get("#calculator__divide").click()
  cy.get("#calculator__divide").click()
  cy.get("#calculator__clear").click()
  cy.get("#calculator__answerbox").should("contain", "")
})
})

describe("Performing basic maths", () =>{
  it("should check that 1 + 2 equals 3 on the screen", ()=>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get("#calculator__1").click()
    cy.get("#calculator__plus").click()
    cy.get("#calculator__2").click()
    cy.get("#calculator__equals").click()
    cy.get("#calculator__answerbox").should("contain", "3")
  })
  it("should check that 4 - 2 equals 2 on the screen", ()=>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get("#calculator__4").click()
    cy.get("#calculator__minus").click()
    cy.get("#calculator__2").click()
    cy.get("#calculator__equals").click()
    cy.get("#calculator__answerbox").should("contain", "2")
  })
  it("should check that 5 * 2 equals 10 on the screen", ()=>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get("#calculator__5").click()
    cy.get("#calculator__times").click()
    cy.get("#calculator__2").click()
    cy.get("#calculator__equals").click()
    cy.get("#calculator__answerbox").should("contain", "10")
  })
  it("should check that 6 / 2 equals 3 on the screen", ()=>{
    cy.visit("http://127.0.0.1:5501/index.html")
    cy.get("#calculator__6").click()
    cy.get("#calculator__divide").click()
    cy.get("#calculator__2").click()
    cy.get("#calculator__equals").click()
    cy.get("#calculator__answerbox").should("contain", "3")
  })
})

// describe("Performing sums with more than 2 numbers", ()=>{
//     it("should check that 5 + 2 + 4  equals 11 on the screen", ()=>{
//       cy.visit("http://127.0.0.1:5501/index.html")
//       cy.get("#calculator__5").click()
//       cy.get("#calculator__plus").click()
//       cy.get("#calculator__2").click()
//       cy.get("#calculator__plus").click()
//       cy.get("#calculator__4").click()
//       cy.get("#calculator__equals").click()
//       cy.get("#calculator__answerbox").should("contain", "11")
//     })

//     it("should check that 2 * 2 + 2 equals 6 on the screen", ()=>{
//       cy.visit("http://127.0.0.1:5501/index.html")
//       cy.get("#calculator__2").click()
//       cy.get("#calculator__times").click()
//       cy.get("#calculator__2").click()
//       cy.get("#calculator__plus").click()
//       cy.get("#calculator__2").click()
//       cy.get("#calculator__equals").click()
//       cy.get("#calculator__answerbox").should("contain", "6")
//     })

// })



