let question_1, question_2, question_3, question_4, question_5;
let answer_1 = 4, answer_2 = true, answer_3 = "На 0 ділити не можна", answer_4 = "Блакитне", answer_5 = 42;
let user_result_1, user_result_2, user_result_3, user_result_4, user_result_5;
let result = 0, rating = 10, 
cancel = "Ви скасували або не відповіли", 
bad_answer = "Ви відповіли не вірно", 
good_answer = "Ви відповіли вірно",
no_answer = "Без відповіді";

question_1 = +prompt("Скільки буде 2+2?");
question_2 = confirm(`Сонце встає на сході?
Скасувати - Ні, ОК - Так`);
question_3 = prompt("Скільки буде 5 / 0?");
question_4 = prompt("Якого кольору небо?");
question_5 = +prompt("Яка правильна відповідь на головне питання життя, всесвіту та всього такого?");

user_result_1 = (question_1) ? (question_1 == answer_1) ? (result += rating, good_answer) : bad_answer : (question_1 = no_answer, cancel);
user_result_2 = (question_2 == answer_2) ? (result += rating, good_answer) : bad_answer;
user_result_3 = (question_3) ? (question_3 == answer_3) ? (result += rating, good_answer) : bad_answer : (question_3 = no_answer, cancel);
user_result_4 = (question_4) ? (question_4 == answer_4) ? (result += rating, good_answer) : bad_answer : (question_4 = no_answer, cancel);
user_result_5 = (question_5) ? (question_5 == answer_5) ? (result += rating, good_answer) : bad_answer : (question_5 = no_answer, cancel);

question_2 = (question_2 == true) ? "Так" : "Ні" 

alert(`Ваш результат ${result}. Ваші відповіді:
1. ${question_1} - ${user_result_1} ;
2. ${question_2} - ${user_result_2} ;
3. ${question_3} - ${user_result_3} ;
4. ${question_4} - ${user_result_4} ;
5. ${question_5} - ${user_result_5} ;`);