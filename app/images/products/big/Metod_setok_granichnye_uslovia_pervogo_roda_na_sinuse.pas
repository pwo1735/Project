uses crt;

var p,q,a,b,a0,b0,g0,a1,b1,g1,h: real;
    x,ap,bp,cp,d,Pp,Qp,y: array [0..1000] of real;
    N,i: integer;
  
begin
  clrscr;
  writeln('Введите коэффициенты p и q (q<0):');
  write('p(x)= ');
  readln(p);
  write('q(x)= ');
  readln(q);
  writeln('Введите концы отрезка:');
  write('a= ');
  readln(a);
  write('b= ');
  readln(b);
  writeln('Введите коэффициенты граничных условий:');
  write('a0= ');
  readln(a0);
  write('b0= ');
  read(b0);
  write('g0= ');
  readln(g0);
  write('a1= ');
  readln(a1);
  write('b1= ');
  readln(b1);
  write('g1= ');
  readln(g1);
  writeln('Введите количество узлов');
  write('N= ');
  readln(N);
  x[0]:=a;
  h:=(b-a)/N;
  for i:=1 to N do
    x[i]:=x[i-1]+h;
  
  
  //задаем матрицу со первой до строки N:
  for i:=1 to N-1 do
  begin
    ap[i]:=(2-p*h)/(2*h*h);
    bp[i]:=q-2/(h*h);
    cp[i]:=(p*h+2)/(2*h*h);
    d[i]:=-sin(x[i])+3*cos(x[i])-3*sin(x[i]); //столбец свободных коэффициентов
  end;
  
  //зададим первую и последнюю строки:
  bp[0]:= a0-b0/h;
  cp[0]:=b0/h;
  d[0]:=g0;
  bp[N]:=a1-b1/h;
  ap[N]:=b1/h;
  d[N]:=g1;
  
  //решим систему методом прогонки
  Pp[0] := -cp[0]/bp[0];
  Qp[0] := d[0]/bp[0];
  FOR i := 1 TO n - 1  DO
    BEGIN
      Pp[i]:= -cp[i]/(bp[i]+ap[i]*Pp[i-1]);
      Qp[i]:= (d[i] - ap[i]*Qp[i-1])/(bp[i]+ap[i]*Pp[i-1]);
    END;
  y[n] :=(d[n] - ap[n]*Qp[n-1])/(bp[n]+ap[n]*Pp[n-1]);
  FOR i := n-1 DOWNTO 0 DO
    y[i] := Pp[i]*y[i+1]+ Qp[i];
  writeln('Узел:                          Решение:              Ожидается:         Погрешность:');
  for i:=0 to N do
  begin
    writeln('x[',i,']=',x[i]:20:16,'y[',i,']=',y[i]:20:16,sin(x[i]):20:16,abs(y[i]-sin(x[i])):20:16);
  end;
  
  readkey;
  
end.