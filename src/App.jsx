import './App.css'

const scores = [
  {이름: "John", 국어: 90, 영어: 90, 수학: 90, 과학:90 },
  {이름: "John", 국어: 90, 영어: 90, 수학: 90, 과학:90 },
  {이름: "John", 국어: 90, 영어: 90, 수학: 90, 과학:90 },
  {이름: "John", 국어: 90, 영어: 90, 수학: 90, 과학:90 },
]



function App() {
  

  return (
    <table>
      <tr>
        <th>이름</th>
        <th>국어</th>
        <th>영어</th>
        <th>수학</th>
        <th>과학</th>
      </tr>
      {[0, 1, 2, 3].map(idx=> {
        return
      })}
      <tr>
        <td>{scores[idx], 이름}</td>
        <td>{scores[idx], 국어}</td>
        <td>{scores[idx], 영어}</td>
        <td>{scores[idx], 수학}</td>
        <td>{scores[idx], 과학}</td>
      </tr>
      <tr>
        <td>{scores[idx], 이름}</td>
        <td>{scores[idx], 국어}</td>
        <td>{scores[idx], 영어}</td>
        <td>{scores[idx], 수학}</td>
        <td>{scores[idx], 과학}</td>
        </tr>
      <tr>
        <td>{scores[idx], 이름}</td>
        <td>{scores[idx], 국어}</td>
        <td>{scores[idx], 영어}</td>
        <td>{scores[idx], 수학}</td>
        <td>{scores[idx], 과학}</td>
      </tr>
    </table>
  )
}

export default App
