CSE-23 Class Test 2 (Section A) Solutions

CT2 (Sec A) - Q1

discipline: CSE
year: CSE-23
exam_type: CT
section: A
ct_number: 2
question_number: 1


Question:

Distinguish between extremum points and inflection points of $f(x)=0$. Find the extremum values of $y = x + \sin x$ for $0 < x < 2\pi$.

⚠️ Note on Question Text: The phrase "inflection points of $f(x)=0$" in the question likely contains a typo and should refer to a curve $y = f(x)$.

Solution:

Part 1: Distinction between Extremum Points and Inflection Points

Extremum Points (Local Maxima/Minima):

Definition: A point $x = c$ is an extremum point of a continuous function $y = f(x)$ if $f(c)$ is either a local maximum or a local minimum value of the function in an open interval containing $c$.

First Derivative Test: At an extremum point, the first derivative $f'(c) = 0$ (or is undefined), and $f'(x)$ changes sign as $x$ passes through $c$.

If $f'(x)$ changes from positive to negative, $c$ is a local maximum.

If $f'(x)$ changes from negative to positive, $c$ is a local minimum.

Inflection Points:

Definition: A point $x = c$ is an inflection point of a curve $y = f(x)$ if the graph of the function changes its concavity at $c$ (from concave upward to concave downward, or vice versa).

Second Derivative Test: At an inflection point, the second derivative $f''(c) = 0$ (or is undefined), and $f''(x)$ changes sign as $x$ passes through $c$. The first derivative $f'(x)$ does not need to change sign at this point, meaning an inflection point is not necessarily an extremum.

Part 2: Find the extremum values of $y = x + \sin x$ for $0 < x < 2\pi$

Step 1: Find the first derivative of the function.


$$y = x + \sin x$$

$$\frac{dy}{dx} = 1 + \cos x$$

Step 2: Find critical points by setting $\frac{dy}{dx} = 0$.


$$1 + \cos x = 0 \implies \cos x = -1$$

Within the interval $0 < x < 2\pi$, the only solution is:


$$x = \pi$$

Step 3: Analyze the nature of the critical point $x = \pi$.
We find the second derivative:


$$\frac{d^2y}{dx^2} = -\sin x$$

At $x = \pi$:


$$\left. \frac{d^2y}{dx^2} \right|_{x=\pi} = -\sin(\pi) = 0$$

Since the second derivative is zero, we must use the First Derivative Test to determine if $x = \pi$ is an extremum:

For $x < \pi$ (in the interval $(0, \pi)$): $\cos x > -1 \implies \frac{dy}{dx} = 1 + \cos x > 0$.

For $x > \pi$ (in the interval $(\pi, 2\pi)$): $\cos x > -1 \implies \frac{dy}{dx} = 1 + \cos x > 0$.

Since the sign of the first derivative $\frac{dy}{dx}$ is positive on both sides of $x = \pi$, it does not change sign. Therefore, $x = \pi$ is a point of inflection and not an extremum.

Since there are no other critical points in the open interval, the function has no local extremum values.

Final Answer:

There are \boxed{\text{no extremum values}} for the curve $y = x + \sin x$ in the open interval $0 < x < 2\pi$.

topic: Applications of Derivatives
difficulty: Medium
question_type: New
techniques_used:

First Derivative Test

Second Derivative Test

Critical Point Analysis

CT2 (Sec A) - Q2

discipline: CSE
year: CSE-23
exam_type: CT
section: A
ct_number: 2
question_number: 2


Question:

Write the singular forms. Evaluate $\lim_{x\to 0} \frac{a^x - 1 - x\log_e a}{x^2}$

⚠️ Note on Question Text: "Singular forms" is a non-standard mathematical translation of "indeterminate forms" in the context of limits. The standard indeterminate forms are detailed below.

Solution:

Part 1: Indeterminate (Singular) Forms of Limits

When evaluating limits, certain expressions are classified as indeterminate forms because their limits cannot be determined solely from the limits of the individual parts. The 7 standard indeterminate forms are:

$\frac{0}{0}$

$\frac{\infty}{\infty}$

$0 \cdot \infty$

$\infty - \infty$

$0^0$

$1^{\infty}$

$\infty^0$

Part 2: Evaluate the limit

$$L = \lim_{x\to 0} \frac{a^x - 1 - x\ln a}{x^2}$$

Step 1: Verify the indeterminate form.
As $x \to 0$:

Numerator: $a^0 - 1 - 0 \cdot \ln a = 1 - 1 - 0 = 0$

Denominator: $0^2 = 0$

Thus, the limit is of the indeterminate form $\frac{0}{0}$.

Step 2: Apply L'Hôpital's Rule.
Differentiating the numerator and the denominator with respect to $x$:


$$\frac{d}{dx}\left( a^x - 1 - x\ln a \right) = a^x \ln a - \ln a$$

$$\frac{d}{dx}\left( x^2 \right) = 2x$$

Thus:


$$L = \lim_{x\to 0} \frac{\ln a \cdot (a^x - 1)}{2x}$$

Step 3: Check the limit form again.
As $x \to 0$:

Numerator: $\ln a \cdot (a^0 - 1) = \ln a \cdot (1 - 1) = 0$

Denominator: $2(0) = 0$

It remains in the indeterminate form $\frac{0}{0}$. We apply L'Hôpital's Rule a second time.

Step 4: Apply L'Hôpital's Rule again.
Differentiating the numerator and the denominator once more:


$$\frac{d}{dx}\left( \ln a \cdot (a^x - 1) \right) = (\ln a)^2 a^x$$

$$\frac{d}{dx}\left( 2x \right) = 2$$

Now, evaluate the limit:


$$L = \lim_{x\to 0} \frac{(\ln a)^2 a^x}{2} = \frac{(\ln a)^2 \cdot a^0}{2} = \frac{(\ln a)^2}{2}$$

Final Answer:

$$\boxed{\frac{(\ln a)^2}{2}}$$

topic: Limits
difficulty: Easy
question_type: New
techniques_used:

L'Hôpital's Rule

Indeterminate Forms

CT2 (Sec A) - Q3

discipline: CSE
year: CSE-23
exam_type: CT
section: A
ct_number: 2
question_number: 3


Question:

Define sub tangent and sub normal. Find the equation of tangent line and normal line at $(2, 2)$ of the curve $xy^2 = 4(4-x)$

Solution:

Part 1: Definitions

Let $P(x_1, y_1)$ be a point on a curve $y = f(x)$. Let the tangent and normal lines to the curve at $P$ intersect the $x$-axis at points $T$ and $N$ respectively. Let $M$ be the projection of $P$ onto the $x$-axis (the foot of the ordinate).

Subtangent: The subtangent is the projection of the tangent segment $PT$ onto the $x$-axis, which is the segment $TM$. Its length is defined as:


$$\text{Length of Subtangent} = \left| \frac{y_1}{\frac{dy}{dx}} \right|$$

Subnormal: The subnormal is the projection of the normal segment $PN$ onto the $x$-axis, which is the segment $MN$. Its length is defined as:


$$\text{Length of Subnormal} = \left| y_1 \frac{dy}{dx} \right|$$

Part 2: Equations of Tangent and Normal lines

Step 1: Check if the point $(2, 2)$ lies on the curve.


$$x y^2 = 4(4 - x)$$


Substitute $x = 2, y = 2$:


$$2(2)^2 = 2(4) = 8$$

$$4(4 - 2) = 4(2) = 8$$


Since $\text{LHS} = \text{RHS}$, the point $(2, 2)$ lies on the curve.

Step 2: Differentiate the curve equation implicitly to find the slope $m$.


$$x y^2 = 16 - 4x$$

Differentiating both sides with respect to $x$:


$$\frac{d}{dx}(x y^2) = \frac{d}{dx}(16 - 4x)$$

$$1 \cdot y^2 + x \cdot 2y \frac{dy}{dx} = -4$$

$$2xy \frac{dy}{dx} = -4 - y^2$$

$$\frac{dy}{dx} = \frac{-4 - y^2}{2xy}$$

Step 3: Evaluate the slope $m$ at $(2,2)$.


$$m = \left. \frac{dy}{dx} \right|_{(2,2)} = \frac{-4 - (2)^2}{2(2)(2)} = \frac{-4 - 4}{8} = \frac{-8}{8} = -1$$

Step 4: Equation of the Tangent Line.
Using the point-slope form $y - y_1 = m(x - x_1)$:


$$y - 2 = -1(x - 2)$$

$$y - 2 = -x + 2$$

$$x + y - 4 = 0$$

Step 5: Equation of the Normal Line.
The slope of the normal line $m_n$ is:


$$m_n = -\frac{1}{m} = -\frac{1}{-1} = 1$$

Using the point-slope form $y - y_1 = m_n(x - x_1)$:


$$y - 2 = 1(x - 2)$$

$$y - 2 = x - 2$$

$$x - y = 0$$

Final Answer:

Tangent Equation: \boxed{x + y - 4 = 0} \
Normal Equation: \boxed{x - y = 0}

topic: Applications of Derivatives
difficulty: Medium
question_type: New
techniques_used:

Implicit Differentiation

Point-Slope Line Equation

CT2 (Sec A) - Q4

discipline: CSE
year: CSE-23
exam_type: CT
section: A
ct_number: 2
question_number: 4


Question:

Define homogeneous function of two variables with example. If $u = x\phi(x+y) + y\psi(x+y)$ then show that $\frac{\partial^2 u}{\partial x^2} - 2\frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y^2} = 0$.

Solution:

Part 1: Definition of Homogeneous Function

A function $f(x, y)$ of two variables is called a homogeneous function of degree $n$ if for any real value $t$, it satisfies:


$$f(tx, ty) = t^n f(x, y)$$

Example:
Consider $f(x, y) = x^3 + 3x^2y$.
Let us substitute $x \to tx$ and $y \to ty$:


$$f(tx, ty) = (tx)^3 + 3(tx)^2(ty) = t^3 x^3 + 3t^3 x^2 y = t^3 (x^3 + 3x^2 y) = t^3 f(x, y)$$


Since $f(tx, ty) = t^3 f(x, y)$, the function is homogeneous of degree $3$.

Part 2: Proof of the Partial Differential Equation

Given:


$$u = x\phi(x+y) + y\psi(x+y)$$

Let $z = x+y$. Then $\phi = \phi(z)$ and $\psi = \psi(z)$.
Note that:


$$\frac{\partial z}{\partial x} = 1 \quad \text{and} \quad \frac{\partial z}{\partial y} = 1$$

By the chain rule, for any function $g(z)$:


$$\frac{\partial g}{\partial x} = g'(z) \cdot \frac{\partial z}{\partial x} = g'(z)$$

$$\frac{\partial g}{\partial y} = g'(z) \cdot \frac{\partial z}{\partial y} = g'(z)$$

Step 1: Compute first-order partial derivatives.
Using the product rule:


$$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x}[x\phi(z)] + \frac{\partial}{\partial x}[y\psi(z)] = \phi(z) + x\phi'(z) + y\psi'(z)$$

$$\frac{\partial u}{\partial y} = \frac{\partial}{\partial y}[x\phi(z)] + \frac{\partial}{\partial y}[y\psi(z)] = x\phi'(z) + \psi(z) + y\psi'(z)$$

Step 2: Compute second-order partial derivatives.

With respect to $x$:


$$\frac{\partial^2 u}{\partial x^2} = \frac{\partial}{\partial x}\left[\phi(z) + x\phi'(z) + y\psi'(z)\right]$$

$$\frac{\partial^2 u}{\partial x^2} = \phi'(z) + \left(\phi'(z) + x\phi''(z)\right) + y\psi''(z)$$

$$\frac{\partial^2 u}{\partial x^2} = 2\phi'(z) + x\phi''(z) + y\psi''(z) \quad \text{--- (1)}$$

With respect to $y$:


$$\frac{\partial^2 u}{\partial y^2} = \frac{\partial}{\partial y}\left[x\phi'(z) + \psi(z) + y\psi'(z)\right]$$

$$\frac{\partial^2 u}{\partial y^2} = x\phi''(z) + \psi'(z) + \left(\psi'(z) + y\psi''(z)\right)$$

$$\frac{\partial^2 u}{\partial y^2} = 2\psi'(z) + x\phi''(z) + y\psi''(z) \quad \text{--- (2)}$$

Mixed partial derivative $\frac{\partial^2 u}{\partial x \partial y}$:


$$\frac{\partial^2 u}{\partial x \partial y} = \frac{\partial}{\partial x}\left[ \frac{\partial u}{\partial y} \right] = \frac{\partial}{\partial x}\left[x\phi'(z) + \psi(z) + y\psi'(z)\right]$$

$$\frac{\partial^2 u}{\partial x \partial y} = \left(\phi'(z) + x\phi''(z)\right) + \psi'(z) + y\psi''(z)$$

$$\frac{\partial^2 u}{\partial x \partial y} = \phi'(z) + \psi'(z) + x\phi''(z) + y\psi''(z) \quad \text{--- (3)}$$

Step 3: Evaluate the LHS of the given expression.
Substitute equations (1), (2), and (3) into the LHS:


$$\text{LHS} = \frac{\partial^2 u}{\partial x^2} - 2\frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y^2}$$

$$\text{LHS} = \left[ 2\phi'(z) + x\phi''(z) + y\psi''(z) \right] - 2\left[ \phi'(z) + \psi'(z) + x\phi''(z) + y\psi''(z) \right] + \left[ 2\psi'(z) + x\phi''(z) + y\psi''(z) \right]$$

Now expand and simplify:


$$\text{LHS} = 2\phi'(z) + x\phi''(z) + y\psi''(z) - 2\phi'(z) - 2\psi'(z) - 2x\phi''(z) - 2y\psi''(z) + 2\psi'(z) + x\phi''(z) + y\psi''(z)$$

Group the terms:

$\phi'(z)$ terms: $2\phi'(z) - 2\phi'(z) = 0$

$\psi'(z)$ terms: $-2\psi'(z) + 2\psi'(z) = 0$

$x\phi''(z)$ terms: $x\phi''(z) - 2x\phi''(z) + x\phi''(z) = 0$

$y\psi''(z)$ terms: $y\psi''(z) - 2y\psi''(z) + y\psi''(z) = 0$

Summing all the terms:


$$\text{LHS} = 0 = \text{RHS}$$

Final Answer:

Since $\text{LHS} = \text{RHS} = 0$, the relationship is proved:


$$\boxed{\frac{\partial^2 u}{\partial x^2} - 2\frac{\partial^2 u}{\partial x \partial y} + \frac{\partial^2 u}{\partial y^2} = 0}$$

topic: Partial Derivatives
difficulty: Hard
question_type: New
techniques_used:

Chain Rule

Second-Order Partial Derivatives

Mathematical Substitution and Simplification