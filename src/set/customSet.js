export class CustomSet {
    constructor(size) {
        this.size = size;
        this.parent = [];
        this.rank = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.size; i++) {
            this.makeSet(i);
        }
    }

    makeSet(i) {
        this.parent[i] = i;
        this.rank[i] = 0;
    }

    find(i) {
        while (i != this.parent[i]) {
            i = this.parent[i];
        }

        return i;
    }

    union(i, j) {
        const iId = this.find(i), jId = this.find(j);

        if (iId === jId) {
            return;
        }

        if (this.rank[iId] > this.rank[jId]) {
            this.parent[jId] = iId;
        } else {
            this.parent[iId] = jId;

            if (this.rank[iId] === this.rank[jId]) {
                this.rank[jId] += 1;
            }
        }
    };
}