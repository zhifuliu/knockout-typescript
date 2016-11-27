import {sayHello} from './greet';

function hello(compiler: string) {
    console.log('Hello from ' + compiler);
}

hello('Typescript');
console.log(sayHello('ts'));
