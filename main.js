const selectPlan=(planNumber) => {


    document.querySelectorAll('.plan').forEach(plan => 
        plan.classList.remove('plan--selected'))

    const myPlan=document.getElementById('plan' + planNumber)
    myPlan.classList.toggle('plan--selected')

    
}
