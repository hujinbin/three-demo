import {
	Mesh
} from 'three';

class Water extends Mesh {
    constructor(geometry:any) {
        super(geometry);
    }
}

export { Water };