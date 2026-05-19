export class Value {
  data: number;
  grad: number;
  prev?: Set<Value>;
  op?: String;
  _backward: () => void;
  label: string;

  constructor(
    data: number,
    prev?: Set<Value>,
    op?: String,
    grad = 0,
    _backward = () => {},
    label = "",
  ) {
    this.data = data;
    this.prev = prev;
    this.op = op;
    this.grad = grad;
    this._backward = _backward;
    this.label = label;
  }

  add(other: Value) {
    let res = this.data + other.data;
    let out = new Value(res, new Set<Value>([this, other]), "+");

    let _backward = () => {
      this.grad += out.grad * 1.0;
      other.grad += out.grad * 1.0;
    };

    out._backward = _backward;

    return out;
  }

  mul(other: Value) {
    let res = this.data * other.data;
    let out = new Value(res, new Set<Value>([this, other]), "*");

    let _backward = () => {
      this.grad += other.data * out.grad;
      other.grad += this.data * out.grad;
    };

    out._backward = _backward;
    return out;
  }

  sub(other: Value) {
    let res = this.data - other.data;
    let out = new Value(res, new Set<Value>([this, other]), "-");

    let _backward = () => {
      this.grad += out.grad * 1.0;
      other.grad += out.grad * 1.0;
    };
    out._backward = _backward;

    return out;
  }

  backward() {
    this.grad = 1.0;

    const topoOrder: Value[] = [];
    let visited = new Set<Value>();
    let topoSort = (root: Value) => {
      if (visited.has(root)) {
        return;
      } else {
        visited.add(root);
      }
      root.prev?.forEach((child) => {
        topoSort(child);
      });
      topoOrder.push(root);
    };

    topoSort(this);

    for (const node of topoOrder) {
      node._backward();
    }
  }
}
