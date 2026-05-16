# Axon — Product Requirements Document
**Version:** 0.1
**Owner:** Kelvin (kelbytes)
**Status:** Pre-development — not yet public
**Last updated:** May 2026

---

## 1. The one-liner

Axon is an open, interactive website that makes the internals of neural
networks visible — built for people who can code but find backpropagation,
gradients, and training dynamics confusing.

> **Why this exists:** The best ML resources (Karpathy's Zero to Hero,
> fast.ai, 3Blue1Brown) are excellent but linear — you watch or read and
> try to hold the picture in your head. Axon is the interactive layer on
> top. You drag a weight slider and the gradient updates live. No video
> scrubbing. No re-reading.

---

## 2. The problem

### Who this is for
Someone exactly like Kelvin six months ago:
- Knows how to write Python
- Has heard of neural nets and wants to understand them properly
- Has tried reading about backprop and found it clicks mathematically but not visually
- Gets confused by phrases like "the gradient flows backward" because there is no picture of what that means

**Not for:** complete beginners with no programming background.
**Not for:** researchers who already understand the internals.
**For:** the large middle group who are mid-journey.

### The specific confusions Axon targets

| Confusion | What Axon does |
|---|---|
| What is a computation graph? | User types an expression; nodes and edges appear live |
| How does the chain rule actually work? | Step-through animation: each node shows its local gradient, then the chain multiplies through |
| What does a neuron actually do? | Drag weights and bias; see the output update in real time |
| Why does learning rate matter so much? | Watch a ball descend a loss surface; slider controls step size |
| What is backprop actually doing? | Animate the gradient signal flowing backward through nodes, one step at a time, with the math shown |

---

## 3. Scope

### MVP (Milestone 1)
*One page. One thing. Ships to Vercel. Real people can use it.*

A single interactive page: the **computation graph explorer**. The user
types a simple mathematical expression — like `(a + b) * c` — and the page:

- Parses it into a directed acyclic graph of Value nodes
- Renders the graph visually (nodes, edges, labels)
- Lets the user click "Run Backward" to animate the gradient flowing back through each node
- Shows the local gradient formula at each node in plain English, not just symbols
- Lets the user edit the expression and watch the graph rebuild

> **Why start here:** This is the exact moment Karpathy's micrograd becomes
> clear — when you see the graph. Everything else (neurons, layers, training)
> is downstream of this one concept.

### v1.1 — Second milestone
- Single neuron playground: drag weights/bias, see output and gradient live
- Activation function explorer: tanh, ReLU, sigmoid on an interactive plot
- Chain rule step-through: walk through a nested function derivative one step at a time

### v1.2 — Third milestone
- Small MLP visualizer: 2-layer network on a toy dataset, watch decision boundary update
- Loss surface explorer: 2D contour map, watch gradient descent converge or diverge
- Learning rate sandbox: too high, too low, just right — shown side by side

### Explicitly out of scope
These will not be built until v1.2 is shipped and used by real people:
- Transformers, attention, or any architecture beyond MLP
- User accounts or saved sessions
- Mobile-first design (desktop is fine for MVP)
- Backend server or training loop (all computation runs in the browser)
- Blender integration — this is a separate creative project, not part of Axon

---

## 4. Tech stack

Everything runs in the browser. No backend. No Python server.

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js (App Router) | Already in stack; good portfolio signal |
| Graph rendering | D3.js or React Flow | Decide after prototyping the graph logic |
| Math / ML logic | Plain TypeScript | Port micrograd's Value class directly |
| Styling | Tailwind CSS | Fast iteration, stays out of the way |
| Hosting | Vercel (free tier) | Zero config, auto-deploy from GitHub |
| Version control | GitHub (public repo) | Public = accountability + portfolio |

---

## 5. Milestones

| Milestone | Deliverable | Target | Done when… |
|---|---|---|---|
| M0 | Repo + PRD live | This week | GitHub repo is public, README explains the project |
| M1 — MVP | Computation graph explorer live | End of week 5 | Shared link works; at least 3 non-developer users try it |
| M2 — v1.1 | Neuron playground + activation explorer | End of week 6 | Both pages live and linked from main nav |
| M3 — v1.2 | Loss surface + decision boundary | End of week 7 | Site feels like a coherent product, not a collection of demos |

---

## 6. Feature tracker

| Feature | Target | Status |
|---|---|---|
| TypeScript port of micrograd `Value` class | MVP | 🔲 |
| Computation graph renderer (nodes + edges + labels) | MVP | 🔲 |
| Backward animation (gradient flow, step-by-step) | MVP | 🔲 |
| Plain English gradient labels per node | MVP | 🔲 |
| Expression input + live graph rebuild | MVP | 🔲 |
| Site deployed on Vercel | MVP | 🔲 |
| Single neuron playground | v1.1 | 🔲 |
| Activation function explorer | v1.1 | 🔲 |
| Chain rule step-through explainer | v1.1 | 🔲 |
| 2-layer MLP on toy 2D dataset | v1.2 | 🔲 |
| Decision boundary visualization | v1.2 | 🔲 |
| Loss surface + gradient descent ball | v1.2 | 🔲 |

---

## 7. Success metrics

### MVP success
- Site is live at a real URL
- At least 3 people who are not the developer use it and find it useful
- The computation graph for `(a * b) + c` renders correctly and backward pass animates
- Kelvin can explain every line of the TS Value class because he wrote it

### Project-level success
- All three milestones ship before semester resumes
- Clean commit history — no 2am dump-everything commits
- At least one person says "this is the thing that made backprop click for me"


---