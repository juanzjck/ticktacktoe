
function game(state={board:[[3,3,3],[3,3,3],[3,3,3]], win:{winner:'',finish:false}, turn:0, cleaning:false, moves:0},action){
    switch(action.type){
        case 'RESTART':{
            let restartBoard=[[3,3,3],[3,3,3],[3,3,3]];
            let restartWin={winner:'',finish:false};
           
            return{
                ...state,
                board:restartBoard,
                win:restartWin,
                moves:0,
                
           }
        }
    
        case 'RESTART_CLEANER':{
            return{
                ...state,
                cleaning:action.payload
           }
        }
        case 'SET_BOARD':{
            console.log(`position: ${action.payload.postion} row:${action.payload.row} state:${action.payload.state}`)
           let tmpBoard=state.board;
           tmpBoard[action.payload.row][action.payload.postion]=action.payload.state;
           console.log(tmpBoard)
           let movesTmp= state.moves+1;
            console.log(movesTmp)
           return{
                ...state,
                board:tmpBoard,
                moves:movesTmp
           }
        }
        case 'WIN':{
            console.log('Win');
            let  win=state.win;
            let winner=matrixScan(state.board)
            let cleaningTmp=state.cleaning
            if(winner!=undefined){
                
                if(winner==1){
                    win={winner:'X',finish:true}
                }else{
                    win={winner:'O',finish:true}
                }
                cleaningTmp=true;
            }
            console.log(win)
            return{
                ...state,
                win:win,
                cleaning:cleaningTmp
           }
        }
        default:{
           
            return state;  
        }
    }
    
}
const returnWinner=(count0,count1)=>{
    if(count0==3){
        return 0;
      }
      if(count1==3){
        return 1;
      } 
      return undefined;
}
const matrixScan=(matrix)=>{
    //recorrido horizontal
    let i=0;
    let count0=0;
    let count1=0;
    for(i;i<3;i++){
      let j=0;
      for(j;j<3;j++){
        if(matrix[i][j]==1){
            count1++;
        }
        if(matrix[i][j]==0){
            count0++;
        }
      }
     if(returnWinner(count0, count1)!=undefined){
        return returnWinner(count0, count1)
     }
     count0=0;
     count1=0;
    }
    //recorrido vertical
     i=0;
     count0=0;
     count1=0;
    for(i;i<3;i++){
      let j=0;
      for(j;j<3;j++){
        if(matrix[j][i]==1){
            count1++;
        }
        if(matrix[j][i]==0){
            count0++;
        }
      }
     if(returnWinner(count0, count1)!=undefined){
        return returnWinner(count0, count1)
     }
     count0=0;
     count1=0;
    }
    //recorrido en x 1
    i=0;
    count0=0;
    count1=0;
    step=0;
    for(i;i<3;i++){
        console.log(`valor ${matrix[i][step]} ${count0}  ${count1}`)
        if(matrix[i][step]==1){
            count1++;
        }
        if(matrix[i][step]==0){
            count0++;
        }
        step++;
        if(returnWinner(count0, count1)!=undefined){
            return returnWinner(count0, count1)
         }
         
    }
    i=0;
    count0=0;
    count1=0;
    step=2;
    for(i;i<3;i++){
        console.log(`valor ${matrix[i][step]} ${count0}  ${count1}`)
        if(matrix[i][step]==1){
            count1++;
        }
        if(matrix[i][step]==0){
            count0++;
        }
        step--;
        if(returnWinner(count0, count1)!=undefined){
            return returnWinner(count0, count1)
         }
         
    }
    return undefined
}
export default game;