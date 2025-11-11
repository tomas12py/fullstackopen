import {useState} from 'react'

export const Anecdotes = () => {

    const [anecdoteNumber,setAnecdoteNumber] = useState(0)
    const [vote,setVote] = useState({
        0:0,
        1:0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0 

    })


    const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
    

    const handleGenerateRandomNumber  = () => {
    
        const randomNumber = Math.floor(Math.random() * anecdotes.length)
        setAnecdoteNumber(randomNumber)
    
    }  

    const handleVote =  () => {
    
      setVote( vote => ({
        ...vote,
        [anecdoteNumber]: vote[anecdoteNumber] + 1
    }))


    }

    const largestVote = Math.max(...Object.values(vote)) 
    const keyLargestVote = Object.keys(vote).find(key => {

      if ( vote[key] > 0 && vote[key] === largestVote ) {

        return key

      }


    })    


    
    
    

  return (
    <>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[anecdoteNumber]}</p>
    <p>{` has ${vote[anecdoteNumber]} votes`}</p>
    <div style={{display:'flex',gap:"1rem"}}>
    <button onClick={ handleVote }>Vote</button>
    <button onClick={ handleGenerateRandomNumber }>next anecdote</button>
    </div>
    {keyLargestVote ? <h2> Anecdote with most votes </h2> : ""}
    {keyLargestVote ? <p>{anecdotes[keyLargestVote]}</p> : ""}
    {keyLargestVote ? <p> has {vote[keyLargestVote]} votes </p> : ""}
    </>
  )
}
