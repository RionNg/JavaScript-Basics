// THREE patterns of asynchronous programming.
// Particularly when dealing with `Promises` or asynchronous operations.
// Such as making API calls, handling promises or managing other non-blocking tasks. 
// Parallel
// Race
// Sequence or Chaining

const promisify = (item, delay) =>
	new Promise((resolve) =>
		setTimeout(() =>
			resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// Parallel
// - Parallel execution involves running multiple asynchronous tasks concurrently.
// - It is often used when multiple independent asynchronous operations can be
//    performed simultaneously to improve overall performance.
async function parallel() {
	const promises = [a(), b(), c()];
	const [output1, output2, output3] = 
		await Promise.all(promises);
	return `parallel is done: ${output1} ${output2} ${output3}`;
}

// Race
// - The race pattern involves initiating multiple asynchronous tasks and resolving or
//    rejecting the Promise as soon as the first task (either resolution or rejection) occurs.
// - Useful when you want to race multiple asynchronous operations and take action based
//    on the first one to complete.
async function race() {
	const promises = [a(), b(), c()];
	const output1 = await Promise.race(promises);
	return `race is done: ${output1}`;
}

// Sequence or Chaining
// - Sequence or chaining involves executing asynchronous tasks in a sequential
//    order, one after the other.
// - Useful when tasks depend on the result of previous tasks or when you want to
//    ensure a specific order of execution.
async function sequence() {
	const output1 = await a();
	const output2 = await b();
	const output3 = await c();
	return `sequence is done: ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);