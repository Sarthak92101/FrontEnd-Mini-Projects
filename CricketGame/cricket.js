let scoreStr = localStorage.getItem('Score');
    let score;
    resetScore(scoreStr);

    function resetScore(scoreStr) {
      score = scoreStr? JSON.parse(scoreStr): {
        win: 0,
        lost: 0,
        tie: 0,

      };

      score.displayScore = function () {
        return `Score:Won:${score.win}, Lost:${score.lost}, Tie: ${score.tie}`;
      };
      showResult();
    }

    function generateComputerChoice() {
      let RandomNumber = Math.random() * 3;

      if (RandomNumber > 0 && RandomNumber <= 1) {
        return 'Bat'
      } else if (RandomNumber > 1 && RandomNumber <= 2) {
        return 'Ball';
      } else {
        return 'Stump';
      }
    }

    function getResult(userMove, computerMove) {
      if (userMove === 'Bat') {
        if (computerMove === 'Ball') {
          score.win++;
          return 'User won';
        } else if (computerMove === 'Bat') {
          score.tie++;
          return `it's a tie`;
        } else if (computerMove === 'Stump') {
          score.lost++;
          return 'Computer Won';
        }
      } else if (userMove === 'Ball') {
        if (computerMove === 'Ball') {
          score.tie++;
          return 'It is tie';
        } else if (computerMove === 'Bat') {
          score.lost++;
          return `Computer won`;
        } else if (computerMove === 'Stump') {
          score.win++;
          return 'User won';
        }
      } else {
        if (computerMove === 'Ball') {
          score.lost++;
          return 'Computer won';
        } else if (computerMove === 'Bat') {
          score.win++;
          return `User won`;
        } else if (computerMove === 'Stump') {
          score.tie++;
          return 'It is tie';
        }
      }
    }
    function showResult(resultMove, computerMove, result) {
      localStorage.setItem('Score', JSON.stringify(score));
      
      document.querySelector('#user-moves').innerText =resultMove ? `You have choosen ${resultMove}` :'' ;

      document.querySelector('#computer-move').innerText = computerMove ? `Computer choice is ${computerMove}`: '';

      document.querySelector('#result').innerText = result || '';

      document.querySelector('#score').innerText = score.displayScore();

    }