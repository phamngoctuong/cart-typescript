export function rate(rate: number) {
  var txt: any = [];
  for (let i = 1; i <= rate; i++) {
    txt.push(<li key={i}><i className="fa fa-star"></i></li>);
  }
  for (let j = 1; j <= 5 - rate; j++) {
    txt.push(<li key={j + 6}><i className="fa fa-star-o"></i></li>);
  }
  return txt;
}