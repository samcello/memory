import { Rx } from 'rxjs/Rx';
export class Memory(){
	subject;
	data;
	construct(subject){
		this.subject = subject;
	}

	assemble(){
		this.subject.subscribe({
			next: (x)=>console.log(x);
		});
	}
}