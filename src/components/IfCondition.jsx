function MissedGoal(){
    return <h3> You missed!</h3>
}

function MadeGoal(){
    return <h3> Goal!!</h3>
}

function Goal(props){
    const isgoal = props.isgoal;

    // if (isgoal){
    //    return <MadeGoal />
    // }
    // return <MissedGoal />
    return(
        <>
        {isgoal? <MadeGoal />:<MissedGoal/>}
        </>
    )

}
export default Goal