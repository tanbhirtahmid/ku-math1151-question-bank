CSE-25 • CT 2 • Question 1

discipline: CSE
year: CSE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 1


Question

Expand $f(x) = \frac{1}{x+1}$ in Taylor series in power of $x - 3$.

Solution

Step 1: Understand the definition of Taylor series expansion
The Taylor series expansion of a function $f(x)$ about the point $x = a$ is given by:


$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \dots + \frac{f^{(n)}(a)}{n!}(x-a)^n + \dots$$


Here, we want to expand $f(x) = \frac{1}{x+1}$ in powers of $x-3$, which means $a = 3$.

Step 2: Find the derivatives of $f(x)$
Let $f(x) = (x+1)^{-1}$.

First derivative:


$$f'(x) = -(x+1)^{-2}$$

Second derivative:


$$f''(x) = 2(x+1)^{-3}$$

Third derivative:


$$f'''(x) = -6(x+1)^{-4}$$

$n$-th derivative:


$$f^{(n)}(x) = (-1)^n n! (x+1)^{-(n+1)}$$

Step 3: Evaluate the function and its derivatives at $x = 3$

$f(3) = \frac{1}{3+1} = \frac{1}{4}$

$f'(3) = -\frac{1}{(3+1)^2} = -\frac{1}{16}$

$f''(3) = \frac{2}{(3+1)^3} = \frac{2}{64} = \frac{1}{32}$

$f'''(3) = -\frac{6}{(3+1)^4} = -\frac{6}{256} = -\frac{3}{128}$

In general, the $n$-th derivative evaluated at $x = 3$ is:


$$f^{(n)}(3) = \frac{(-1)^n n!}{4^{n+1}}$$

Step 4: Substitute these values into the Taylor series formula


$$f(x) = \frac{1}{4} - \frac{1}{16}(x-3) + \frac{1}{2!} \left(\frac{2}{64}\right)(x-3)^2 + \frac{1}{3!} \left(-\frac{6}{256}\right)(x-3)^3 + \dots$$


Simplifying the coefficients:


$$f(x) = \frac{1}{4} - \frac{1}{16}(x-3) + \frac{1}{64}(x-3)^2 - \frac{1}{256}(x-3)^3 + \dots$$


We can express this compactly in summation notation:


$$f(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{4^{n+1}} (x-3)^n$$

Answer

$$\boxed{f(x) = \sum_{n=0}^{\infty} \frac{(-1)^n}{4^{n+1}} (x-3)^n = \frac{1}{4} - \frac{1}{16}(x-3) + \frac{1}{64}(x-3)^2 - \frac{1}{256}(x-3)^3 + \dots}$$

Classification

topic: Series Expansion
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:
  - Taylor Series Expansion
  - N-th Derivative Formulation


CSE-25 • CT 2 • Question 2

discipline: CSE
year: CSE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 2


Question

Verify Rolle's theorem for $f(x) = x^2 - 3x + 2$ in $[1,2]$.

Solution

Step 1: State the conditions of Rolle's Theorem
Rolle's Theorem states that if a function $f(x)$ satisfies:

$f(x)$ is continuous on the closed interval $[a, b]$,

$f(x)$ is differentiable on the open interval $(a, b)$, and

$f(a) = f(b)$,

then there exists at least one value $c \in (a, b)$ such that $f'(c) = 0$.

Step 2: Verify the conditions for $f(x) = x^2 - 3x + 2$ on $[1, 2]$

Continuity: The function $f(x) = x^2 - 3x + 2$ is a polynomial function. All polynomial functions are continuous everywhere, hence $f(x)$ is continuous on the closed interval $[1, 2]$.

Differentiability: The derivative of $f(x)$ is $f'(x) = 2x - 3$. This derivative exists for all real numbers, hence $f(x)$ is differentiable on the open interval $(1, 2)$.

Boundary values evaluation:

$f(1) = (1)^2 - 3(1) + 2 = 1 - 3 + 2 = 0$

$f(2) = (2)^2 - 3(2) + 2 = 4 - 6 + 2 = 0$

Since $f(1) = f(2) = 0$, the third condition is satisfied.

Step 3: Find the value of $c$
By Rolle's Theorem, there must exist some $c \in (1, 2)$ such that:


$$f'(c) = 0$$


Substitute $c$ into the derivative formula:


$$2c - 3 = 0 \implies 2c = 3 \implies c = 1.5$$

Since $1.5 \in (1, 2)$, the theorem is verified.

Answer

$$\boxed{\text{Rolle's theorem is verified with } c = \frac{3}{2} \in (1,2).}$$

Classification

topic: Applications of Derivatives
difficulty: Easy
question_type: Standard Verification
techniques_used:
  - Rolle's Theorem
  - Polynomial Differentiation


CSE-25 • CT 2 • Question 3

discipline: CSE
year: CSE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 3


Question

Evaluate $\lim_{x \to 0} \left[ \frac{1}{x^2} - \frac{1}{\sin^2 x} \right]$.

Solution

Step 1: Simplify the expression to a single fraction
Let the limit be $L$:


$$L = \lim_{x \to 0} \left[ \frac{\sin^2 x - x^2}{x^2 \sin^2 x} \right]$$


As $x \to 0$, this yields an indeterminate form of type $\frac{0}{0}$.

Step 2: Simplify the denominator using Taylor expansion or limit properties
We know that $\lim_{x \to 0} \frac{\sin x}{x} = 1$, which means $\sin^2 x \approx x^2$ for values near $0$.
Let's rewrite the denominator:


$$x^2 \sin^2 x = x^2 \cdot \left(\frac{\sin^2 x}{x^2}\right) \cdot x^2 = x^4 \left(\frac{\sin x}{x}\right)^2$$


Since $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^2 = 1$, we can replace $x^2 \sin^2 x$ in the denominator with $x^4$ for the purpose of finding the limit:


$$L = \lim_{x \to 0} \frac{\sin^2 x - x^2}{x^4}$$

Step 3: Use the Taylor series expansion of $\sin x$
The Maclaurin series expansion for $\sin x$ is:


$$\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \dots$$


Square both sides to get $\sin^2 x$:


$$\sin^2 x = \left( x - \frac{x^3}{6} + \mathcal{O}(x^5) \right)^2$$

$$\sin^2 x = x^2 - 2 \cdot x \cdot \frac{x^3}{6} + \mathcal{O}(x^6)$$

$$\sin^2 x = x^2 - \frac{x^4}{3} + \mathcal{O}(x^6)$$

Step 4: Substitute $\sin^2 x$ back into the limit expression


$$L = \lim_{x \to 0} \frac{\left(x^2 - \frac{x^4}{3} + \mathcal{O}(x^6)\right) - x^2}{x^4}$$

$$L = \lim_{x \to 0} \frac{-\frac{x^4}{3} + \mathcal{O}(x^6)}{x^4}$$

$$L = \lim_{x \to 0} \left( -\frac{1}{3} + \mathcal{O}(x^2) \right) = -\frac{1}{3}$$

Answer

$$\boxed{-\frac{1}{3}}$$

Classification

topic: Limits
difficulty: Medium
question_type: Standard Calculus Exam Problem
techniques_used:
  - Taylor Series Expansion
  - Algebraic Manipulation


CSE-25 • CT 2 • Question 4

discipline: CSE
year: CSE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 4


Question

If $u = \tan^{-1}\left( \frac{x^3 + y^3}{x+y} \right)$ then show that $x u_x + y u_y = \sin 2u$.

Solution

Step 1: Simplify the equation using Euler's Theorem on Homogeneous Functions
Let's rewrite the given function as:


$$\tan u = \frac{x^3 + y^3}{x+y}$$


Define a new function $z = \tan u$:


$$z(x, y) = \frac{x^3 + y^3}{x+y}$$

Step 2: Check if $z(x, y)$ is a homogeneous function
A function $z(x, y)$ is homogeneous of degree $n$ if $z(tx, ty) = t^n z(x, y)$.


$$z(tx, ty) = \frac{(tx)^3 + (ty)^3}{tx + ty} = \frac{t^3 (x^3 + y^3)}{t(x+y)} = t^2 \left( \frac{x^3 + y^3}{x+y} \right) = t^2 z(x, y)$$


Therefore, $z(x, y)$ is a homogeneous function of degree $n = 2$.

Step 3: Apply Euler's Theorem
Euler's Theorem for a homogeneous function $z$ of degree $n$ states:


$$x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = n z$$


Here, $n = 2$, so:


$$x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = 2 z$$

Step 4: Express derivatives of $z$ in terms of $u$
Since $z = \tan u$, we can find the partial derivatives using the chain rule:


$$\frac{\partial z}{\partial x} = \frac{d}{du}(\tan u) \cdot \frac{\partial u}{\partial x} = \sec^2 u \cdot u_x$$

$$\frac{\partial z}{\partial y} = \frac{d}{du}(\tan u) \cdot \frac{\partial u}{\partial y} = \sec^2 u \cdot u_y$$

Step 5: Substitute these partial derivatives into Euler's equation


$$x (\sec^2 u \cdot u_x) + y (\sec^2 u \cdot u_y) = 2 \tan u$$


Factor out $\sec^2 u$:


$$\sec^2 u (x u_x + y u_y) = 2 \tan u$$


Divide both sides by $\sec^2 u$:


$$x u_x + y u_y = \frac{2 \tan u}{\sec^2 u}$$

Step 6: Simplify the trigonometric expression


$$\frac{2 \tan u}{\sec^2 u} = 2 \cdot \frac{\sin u}{\cos u} \cdot \cos^2 u = 2 \sin u \cos u = \sin 2u$$

Thus, we obtain:


$$x u_x + y u_y = \sin 2u$$


This completes the proof.

Answer

$$\boxed{\text{Shown: } x u_x + y u_y = \sin 2u}$$

Classification

topic: Partial Derivatives
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Euler's Theorem on Homogeneous Functions
  - Chain Rule
  - Trigonometric Identities


CSE-25 • CT 2 • Question 5

discipline: CSE
year: CSE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 5


Question

Determine the extremum value and extremum points of $f(x) = \sin x + \cos 2x$ , $0 < x < 2\pi$.

Solution

Step 1: Find the first derivative of $f(x)$
Given:


$$f(x) = \sin x + \cos 2x$$


Differentiate with respect to $x$:


$$f'(x) = \cos x - 2\sin 2x$$


Since $\sin 2x = 2\sin x \cos x$, we can write:


$$f'(x) = \cos x - 4\sin x \cos x = \cos x(1 - 4\sin x)$$

Step 2: Find the critical points by setting $f'(x) = 0$


$$\cos x(1 - 4\sin x) = 0$$


This gives two cases:

Case 1: $\cos x = 0$
For $0 < x < 2\pi$, the solutions are:


$$x = \frac{\pi}{2}, \quad x = \frac{3\pi}{2}$$

Case 2: $1 - 4\sin x = 0 \implies \sin x = \frac{1}{4}$
Since $\sin x > 0$, this occurs in Quadrant I and Quadrant II. Let:


$$x_1 = \sin^{-1}\left(\frac{1}{4}\right) \quad (\text{Quadrant I})$$

$$x_2 = \pi - \sin^{-1}\left(\frac{1}{4}\right) \quad (\text{Quadrant II})$$

Step 3: Find the second derivative to determine the nature of the extremum


$$f''(x) = \frac{d}{dx}(\cos x - 2\sin 2x) = -\sin x - 4\cos 2x$$


Using the identity $\cos 2x = 1 - 2\sin^2 x$, we can rewrite $f''(x)$ in terms of $\sin x$:


$$f''(x) = -\sin x - 4(1 - 2\sin^2 x) = 8\sin^2 x - \sin x - 4$$

Step 4: Test each critical point

At $x = \frac{\pi}{2}$:


$$\sin\left(\frac{\pi}{2}\right) = 1$$

$$f''\left(\frac{\pi}{2}\right) = 8(1)^2 - 1 - 4 = 3 > 0 \quad \implies \text{Local Minimum}$$


The minimum value is:


$$f\left(\frac{\pi}{2}\right) = \sin\left(\frac{\pi}{2}\right) + \cos\left(2 \cdot \frac{\pi}{2}\right) = 1 + \cos\pi = 1 - 1 = 0$$

At $x = \frac{3\pi}{2}$:


$$\sin\left(\frac{3\pi}{2}\right) = -1$$

$$f''\left(\frac{3\pi}{2}\right) = 8(-1)^2 - (-1) - 4 = 8 + 1 - 4 = 5 > 0 \quad \implies \text{Local Minimum}$$


The minimum value is:


$$f\left(\frac{3\pi}{2}\right) = \sin\left(\frac{3\pi}{2}\right) + \cos(3\pi) = -1 - 1 = -2$$

At $x = x_1, x_2$ where $\sin x = \frac{1}{4}$:


$$f''(x) = 8\left(\frac{1}{4}\right)^2 - \frac{1}{4} - 4 = 8\left(\frac{1}{16}\right) - \frac{1}{4} - 4 = \frac{1}{2} - \frac{1}{4} - 4 = -\frac{15}{4} < 0 \quad \implies \text{Local Maxima}$$


Since $\cos 2x = 1 - 2\sin^2 x$, the maximum value is:


$$f(x) = \sin x + (1 - 2\sin^2 x) = \frac{1}{4} + 1 - 2\left(\frac{1}{16}\right) = \frac{1}{4} + 1 - \frac{1}{8} = \frac{2 + 8 - 1}{8} = \frac{9}{8}$$

Answer

$$\boxed{\begin{aligned}
\text{Extremum Points: } & \text{Local Minima at } x = \frac{\pi}{2} \text{ and } x = \frac{3\pi}{2} \\
& \text{Local Maxima at } x = \sin^{-1}\left(\frac{1}{4}\right) \text{ and } x = \pi - \sin^{-1}\left(\frac{1}{4}\right) \\
\text{Extremum Values: } & \text{Minimum values: } 0 \text{ (at } x=\frac{\pi}{2}\text{), } -2 \text{ (at } x=\frac{3\pi}{2}\text{)} \\
& \text{Maximum value: } \frac{9}{8} \text{ (at both maxima points)}
\end{aligned}}$$

Classification

topic: Applications of Derivatives
difficulty: Hard
question_type: Advanced Extremum Finder
techniques_used:
  - First and Second Derivative Tests
  - Trigonometric Equation Solving


ECE-25 • CT 2 • Question 1

discipline: ECE
year: ECE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 1


Question

Expand $f(x) = \sin x$ in Taylor series in power of $x - \frac{\pi}{2}$.

Solution

Step 1: Understand the definition of Taylor series expansion
The Taylor series expansion of a function $f(x)$ about $x = a$ is:


$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!} (x-a)^n$$


Here, $a = \frac{\pi}{2}$.

Step 2: Compute derivatives of $f(x) = \sin x$ and evaluate at $a = \frac{\pi}{2}$

$f(x) = \sin x \implies f\left(\frac{\pi}{2}\right) = \sin\left(\frac{\pi}{2}\right) = 1$

$f'(x) = \cos x \implies f'\left(\frac{\pi}{2}\right) = \cos\left(\frac{\pi}{2}\right) = 0$

$f''(x) = -\sin x \implies f''\left(\frac{\pi}{2}\right) = -\sin\left(\frac{\pi}{2}\right) = -1$

$f'''(x) = -\cos x \implies f'''\left(\frac{\pi}{2}\right) = -\cos\left(\frac{\pi}{2}\right) = 0$

$f^{(4)}(x) = \sin x \implies f^{(4)}\left(\frac{\pi}{2}\right) = 1$

We observe that the odd-order derivatives at $\frac{\pi}{2}$ are $0$, and the even-order derivatives alternate signs:


$$f^{(2k)}\left(\frac{\pi}{2}\right) = (-1)^k \quad \text{for } k = 0, 1, 2, \dots$$

$$f^{(2k+1)}\left(\frac{\pi}{2}\right) = 0$$

Step 3: Construct the Taylor series


$$f(x) = f\left(\frac{\pi}{2}\right) + f'\left(\frac{\pi}{2}\right)\left(x-\frac{\pi}{2}\right) + \frac{f''\left(\frac{\pi}{2}\right)}{2!}\left(x-\frac{\pi}{2}\right)^2 + \frac{f'''\left(\frac{\pi}{2}\right)}{3!}\left(x-\frac{\pi}{2}\right)^3 + \dots$$


Substitute the values:


$$\sin x = 1 - \frac{1}{2!}\left(x-\frac{\pi}{2}\right)^2 + \frac{1}{4!}\left(x-\frac{\pi}{2}\right)^4 - \frac{1}{6!}\left(x-\frac{\pi}{2}\right)^6 + \dots$$


Using summation notation:


$$\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} \left(x-\frac{\pi}{2}\right)^{2n}$$

Answer

$$\boxed{\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n}{(2n)!} \left(x-\frac{\pi}{2}\right)^{2n} = 1 - \frac{1}{2!}\left(x-\frac{\pi}{2}\right)^2 + \frac{1}{4!}\left(x-\frac{\pi}{2}\right)^4 - \dots}$$

Classification

topic: Series Expansion
difficulty: Easy
question_type: Standard Textbook Problem
techniques_used:
  - Taylor Series Expansion
  - Evaluating Trigonometric Derivatives


ECE-25 • CT 2 • Question 2

discipline: ECE
year: ECE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 2


Question

Verify mean value theorem for $f(x) = 3 + 2x - x^2$ in $[0,1]$.

Solution

Step 1: State the Mean Value Theorem (Lagrange's MVT)
The Mean Value Theorem states that if a function $f(x)$ is:

Continuous on $[a, b]$, and

Differentiable on $(a, b)$,

then there exists at least one $c \in (a, b)$ such that:


$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

Step 2: Verify conditions for $f(x) = 3 + 2x - x^2$ on $[0, 1]$

Continuity: $f(x)$ is a polynomial of degree 2, which is continuous everywhere, including $[0, 1]$.

Differentiability: The derivative $f'(x) = 2 - 2x$ exists for all $x \in \mathbb{R}$, so it is differentiable on $(0, 1)$.

Step 3: Compute values at the boundaries
Here, $a = 0$ and $b = 1$.

$f(a) = f(0) = 3 + 2(0) - 0^2 = 3$

$f(b) = f(1) = 3 + 2(1) - 1^2 = 3 + 2 - 1 = 4$

Step 4: Find $c$
We must find $c \in (0, 1)$ such that:


$$f'(c) = \frac{f(1) - f(0)}{1 - 0}$$


Substitute the derivative and evaluated limits:


$$2 - 2c = \frac{4 - 3}{1}$$

$$2 - 2c = 1 \implies 2c = 1 \implies c = \frac{1}{2}$$

Since $c = \frac{1}{2}$ lies in the interval $(0, 1)$, the Mean Value Theorem is verified.

Answer

$$\boxed{\text{Mean Value Theorem is verified with } c = \frac{1}{2} \in (0,1).}$$

Classification

topic: Applications of Derivatives
difficulty: Easy
question_type: Standard Verification
techniques_used:
  - Lagrange's Mean Value Theorem
  - Polynomial Differentiation


ECE-25 • CT 2 • Question 3

discipline: ECE
year: ECE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 3


Question

Evaluate $\lim_{x \to 0} \left[ \frac{1}{x} - \frac{1}{x^2}\log(1+x) \right]$.

Solution

Step 1: Write the limit as a single fraction
Let $L$ be the limit:


$$L = \lim_{x \to 0} \left[ \frac{x - \log(1+x)}{x^2} \right]$$


At $x \to 0$, this expression has the indeterminate form $\frac{0}{0}$.

Step 2: Use Taylor series expansion
The Maclaurin series expansion for $\log(1+x)$ is:


$$\log(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \dots$$

Substitute this into the expression for $L$:


$$L = \lim_{x \to 0} \frac{x - \left( x - \frac{x^2}{2} + \frac{x^3}{3} - \dots \right)}{x^2}$$

$$L = \lim_{x \to 0} \frac{\frac{x^2}{2} - \frac{x^3}{3} + \dots}{x^2}$$

Step 3: Simplify by dividing terms by $x^2$


$$L = \lim_{x \to 0} \left( \frac{1}{2} - \frac{x}{3} + \mathcal{O}(x^2) \right) = \frac{1}{2}$$

Answer

$$\boxed{\frac{1}{2}}$$

Classification

topic: Limits
difficulty: Easy
question_type: Standard Calculus Exam Problem
techniques_used:
  - Taylor Series Expansion


ECE-25 • CT 2 • Question 4

discipline: ECE
year: ECE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 4


Question

If $u = \sin^{-1}\left( \frac{x^2 + y^2}{x+y} \right)$ then show that $x u_x + y u_y = \tan u$.

Solution

Step 1: Simplify using Euler's Theorem on Homogeneous Functions
Rewrite the function $u(x,y)$:


$$\sin u = \frac{x^2 + y^2}{x+y}$$


Let $z = \sin u$:


$$z(x, y) = \frac{x^2 + y^2}{x+y}$$

Step 2: Check if $z(x, y)$ is homogeneous
Replace $x$ with $tx$ and $y$ with $ty$:


$$z(tx, ty) = \frac{(tx)^2 + (ty)^2}{tx + ty} = \frac{t^2 (x^2 + y^2)}{t(x+y)} = t^1 \left(\frac{x^2 + y^2}{x+y}\right) = t^1 z(x,y)$$


Thus, $z(x, y)$ is a homogeneous function of degree $n = 1$.

Step 3: Apply Euler's Theorem
According to Euler's Theorem for a homogeneous function $z$ of degree $n = 1$:


$$x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = n z \implies x \frac{\partial z}{\partial x} + y \frac{\partial z}{\partial y} = z$$

Step 4: Use Chain Rule to express partial derivatives of $z$ in terms of $u$
Since $z = \sin u$:


$$\frac{\partial z}{\partial x} = \cos u \cdot u_x$$

$$\frac{\partial z}{\partial y} = \cos u \cdot u_y$$

Step 5: Substitute into Euler's Theorem equation


$$x (\cos u \cdot u_x) + y (\cos u \cdot u_y) = \sin u$$


Factor out $\cos u$:


$$\cos u (x u_x + y u_y) = \sin u$$


Divide by $\cos u$:


$$x u_x + y u_y = \frac{\sin u}{\cos u} = \tan u$$

This completes the proof.

Answer

$$\boxed{\text{Shown: } x u_x + y u_y = \tan u}$$

Classification

topic: Partial Derivatives
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Euler's Theorem on Homogeneous Functions
  - Chain Rule
  - Trigonometric Identities


ECE-25 • CT 2 • Question 5

discipline: ECE
year: ECE-25
exam_type: CT
section: UNKNOWN
ct_number: 2
question_number: 5


Question

Determine the extremum values and extremum points of $f(x) = x + \sin 2x$ , $0 < x < 2\pi$.

Solution

Step 1: Find the first derivative of $f(x)$
Given:


$$f(x) = x + \sin 2x$$


Differentiate with respect to $x$:


$$f'(x) = 1 + 2\cos 2x$$

Step 2: Find the critical points
Set $f'(x) = 0$:


$$1 + 2\cos 2x = 0 \implies \cos 2x = -\frac{1}{2}$$

We need to solve for $2x$ where $0 < x < 2\pi \implies 0 < 2x < 4\pi$.
The general solutions for $\cos \theta = -\frac{1}{2}$ are:


$$\theta = \frac{2\pi}{3}, \frac{4\pi}{3}, \frac{8\pi}{3}, \frac{10\pi}{3}$$


Thus, for $2x$:


$$2x = \frac{2\pi}{3} \implies x = \frac{\pi}{3}$$

$$2x = \frac{4\pi}{3} \implies x = \frac{2\pi}{3}$$

$$2x = \frac{8\pi}{3} \implies x = \frac{4\pi}{3}$$

$$2x = \frac{10\pi}{3} \implies x = \frac{5\pi}{3}$$

So the critical points are:


$$x = \frac{\pi}{3}, \frac{2\pi}{3}, \frac{4\pi}{3}, \frac{5\pi}{3}$$

Step 3: Find the second derivative to determine the nature of the critical points


$$f''(x) = \frac{d}{dx}(1 + 2\cos 2x) = -4\sin 2x$$

Step 4: Test the critical points

At $x = \frac{\pi}{3}$:


$$f''\left(\frac{\pi}{3}\right) = -4\sin\left(\frac{2\pi}{3}\right) = -4\left(\frac{\sqrt{3}}{2}\right) = -2\sqrt{3} < 0 \quad \implies \text{Local Maximum}$$


Maximum value:


$$f\left(\frac{\pi}{3}\right) = \frac{\pi}{3} + \sin\left(\frac{2\pi}{3}\right) = \frac{\pi}{3} + \frac{\sqrt{3}}{2}$$

At $x = \frac{2\pi}{3}$:


$$f''\left(\frac{2\pi}{3}\right) = -4\sin\left(\frac{4\pi}{3}\right) = -4\left(-\frac{\sqrt{3}}{2}\right) = 2\sqrt{3} > 0 \quad \implies \text{Local Minimum}$$


Minimum value:


$$f\left(\frac{2\pi}{3}\right) = \frac{2\pi}{3} + \sin\left(\frac{4\pi}{3}\right) = \frac{2\pi}{3} - \frac{\sqrt{3}}{2}$$

At $x = \frac{4\pi}{3}$:


$$f''\left(\frac{4\pi}{3}\right) = -4\sin\left(\frac{8\pi}{3}\right) = -4\left(\frac{\sqrt{3}}{2}\right) = -2\sqrt{3} < 0 \quad \implies \text{Local Maximum}$$


Maximum value:


$$f\left(\frac{4\pi}{3}\right) = \frac{4\pi}{3} + \sin\left(\frac{8\pi}{3}\right) = \frac{4\pi}{3} + \frac{\sqrt{3}}{2}$$

At $x = \frac{5\pi}{3}$:


$$f''\left(\frac{5\pi}{3}\right) = -4\sin\left(\frac{10\pi}{3}\right) = -4\left(-\frac{\sqrt{3}}{2}\right) = 2\sqrt{3} > 0 \quad \implies \text{Local Minimum}$$


Minimum value:


$$f\left(\frac{5\pi}{3}\right) = \frac{5\pi}{3} + \sin\left(\frac{10\pi}{3}\right) = \frac{5\pi}{3} - \frac{\sqrt{3}}{2}$$

Answer

$$\boxed{\begin{aligned}
\text{Extremum Points: } & \text{Local Maxima at } x = \frac{\pi}{3} \text{ and } x = \frac{4\pi}{3} \\
& \text{Local Minima at } x = \frac{2\pi}{3} \text{ and } x = \frac{5\pi}{3} \\
\text{Extremum Values: } & \text{Maximum values: } \frac{\pi}{3} + \frac{\sqrt{3}}{2} \text{ and } \frac{4\pi}{3} + \frac{\sqrt{3}}{2} \\
& \text{Minimum values: } \frac{2\pi}{3} - \frac{\sqrt{3}}{2} \text{ and } \frac{5\pi}{3} - \frac{\sqrt{3}}{2}
\end{aligned}}$$

Classification

topic: Applications of Derivatives
difficulty: Medium
question_type: Advanced Extremum Finder
techniques_used:
  - First and Second Derivative Tests
  - Trigonometric Equation Solving
