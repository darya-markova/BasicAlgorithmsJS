/*
* given a tree that is presented with two params
* [4, -1, 4, 1, 1] - list of nodes where <nodes[i]> is parent of <i>, 
*  if nodes[i] == -1, then <i> is root 
*/

export class TreeHeight {
	constructor(list) {
        this.tree = {};
        this.cache = {};
        this.count = list.length;

        this.initTree(list);
	}

	initTree(list) {
		for (let i = 0; i < list.length; i++) {
			this.tree[i] = list[i]
		}
	}

	// the length of way from node to the root
	traverse(node) {

	    let length = 1;

        while ((node = this.tree[node]) >= 0) {
            if (this.cache[node]) {
                length += this.cache[node];
                break;
            } else {
                ++length;
            }
        }

		return length;
	}

	// traversing from all the nodes and searching maxHeight
	get maxHeight() {
		let maxHeight = 0, height;

		for (let i = 0; i < this.count; i++) {
			if (this.cache[i]) {
				height = this.cache[i];
			} else {
				height = this.traverse(i);
				
				this.cache[i] = height;
				this.cache[this.tree[i]] = height - 1;
			}

			maxHeight = Math.max(maxHeight, height);
		}

		return maxHeight;
	}
}