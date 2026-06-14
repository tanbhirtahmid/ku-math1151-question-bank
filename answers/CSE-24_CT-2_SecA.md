CT2 (Sec A) - Q1

discipline: CSE
year: CSE-24
exam_type: CT
section: A
ct_number: 2
question_number: 1


Question:

Expand $\cos x$ in powers of $x - \frac{\pi}{4}$.

Solution:

To expand $f(x) = \cos x$ in powers of $\left(x - \frac{\pi}{4}\right)$, we use Taylor's series expansion about $a = \frac{\pi}{4}$.

The Taylor's series of a function $f(x)$ about $x = a$ is given by:


$$f(x) = f(a) + (x - a)f'(a) + \frac{(x - a)^2}{2!}f''(a) + \frac{(x - a)^3}{3!}f'''(a) + \frac{(x - a)^4}{4!}f^{(4)}(a) + \dots$$

Here, $f(x) = \cos x$ and $a = \frac{\pi}{4}$. Let us find the successive derivatives of $f(x)$ and evaluate them at $x = \frac{\pi}{4}$:

At $n = 0$:


$$f(x) = \cos x \implies f\left(\frac{\pi}{4}\right) = \cos\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$$

At $n = 1$:


$$f'(x) = -\sin x \implies f'\left(\frac{\pi}{4}\right) = -\sin\left(\frac{\pi}{4}\right) = -\frac{1}{\sqrt{2}}$$

At $n = 2$:


$$f''(x) = -\cos x \implies f''\left(\frac{\pi}{4}\right) = -\cos\left(\frac{\pi}{4}\right) = -\frac{1}{\sqrt{2}}$$

At $n = 3$:


$$f'''(x) = \sin x \implies f'''\left(\frac{\pi}{4}\right) = \sin\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$$

At $n = 4$:


$$f^{(4)}(x) = \cos x \implies f^{(4)}\left(\frac{\pi}{4}\right) = \cos\left(\frac{\pi}{4}\right) = \frac{1}{\sqrt{2}}$$

The values of the derivatives at $x = \frac{\pi}{4}$ follow a repeating pattern of signs: $\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}, -\frac{1}{\sqrt{2}}, \frac{1}{\sqrt{2}}, \dots$

Substituting these values into the Taylor's series expansion:


$$\cos x = \frac{1}{\sqrt{2}} + \left(x - \frac{\pi}{4}\right)\left(-\frac{1}{\sqrt{2}}\right) + \frac{\left(x - \frac{\pi}{4}\right)^2}{2!}\left(-\frac{1}{\sqrt{2}}\right) + \frac{\left(x - \frac{\pi}{4}\right)^3}{3!}\left(\frac{1}{\sqrt{2}}\right) + \frac{\left(x - \frac{\pi}{4}\right)^4}{4!}\left(\frac{1}{\sqrt{2}}\right) + \dots$$

Factoring out the common term $\frac{1}{\sqrt{2}}$:


$$\cos x = \frac{1}{\sqrt{2}} \left[ 1 - \left(x - \frac{\pi}{4}\right) - \frac{1}{2!}\left(x - \frac{\pi}{4}\right)^2 + \frac{1}{3!}\left(x - \frac{\pi}{4}\right)^3 + \frac{1}{4!}\left(x - \frac{\pi}{4}\right)^4 - \dots \right]$$

In sigma notation, this can be written as:


$$\cos x = \sum_{n=0}^{\infty} \frac{\cos\left(\frac{\pi}{4} + \frac{n\pi}{2}\right)}{n!} \left(x - \frac{\pi}{4}\right)^n$$

Final Answer:

$$\boxed{\cos x = \frac{1}{\sqrt{2}} \left[ 1 - \left(x - \frac{\pi}{4}\right) - \frac{1}{2!}\left(x - \frac{\pi}{4}\right)^2 + \frac{1}{3!}\left(x - \frac{\pi}{4}\right)^3 + \frac{1}{4!}\left(x - \frac{\pi}{4}\right)^4 - \dots \right]}$$

topic: Series Expansion
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:

Taylor Series Expansion

CT2 (Sec A) - Q2

discipline: CSE
year: CSE-24
exam_type: CT
section: A
ct_number: 2
question_number: 2


Question:

Distinguish between critical points and points of inflection of a function. Find the extremum values of $f(x) = e^x + 2\cos x + e^{-x}$.

Solution:

Part 1: Distinction between Critical Points and Points of Inflection

Feature

Critical Point

Point of Inflection

Definition

A point $x = c$ in the domain of $f(x)$ where the first derivative is either zero or undefined ($f'(c) = 0$ or $f'(c)$ DNE).

A point on a curve at which the direction of curvature (concavity) changes from concave up to concave down, or vice versa.

Mathematical Condition

$f'(c) = 0$ or $f'(c)$ is undefined.

$f''(c) = 0$ or $f''(c)$ is undefined, and $f''(x)$ changes sign as it passes through $x = c$.

Geometric Meaning

The tangent line at this point is either horizontal or vertical/non-existent. It represents candidates for local extrema.

The curve crosses its tangent line at this point.

Significance

Determines local maximum, local minimum, or saddle/stationary points.

Determines where the rate of change of the slope changes from increasing to decreasing, or vice versa.

Part 2: Extremum Values of $f(x) = e^x + 2\cos x + e^{-x}$

We rewrite the function as:


$$f(x) = e^x + e^{-x} + 2\cos x = 2\cosh x + 2\cos x$$

Step 1: Find the first derivative $f'(x)$ and locate critical points.

$$f'(x) = \frac{d}{dx}\left(e^x + 2\cos x + e^{-x}\right) = e^x - 2\sin x - e^{-x} = 2\sinh x - 2\sin x$$

Set $f'(x) = 0$ to find the critical points:


$$2\sinh x - 2\sin x = 0 \implies \sinh x = \sin x$$

Let us analyze the equation $\sinh x = \sin x$:

For $x > 0$, $\sinh x > x > \sin x$.

For $x < 0$, $\sinh x < x < \sin x$.

At $x = 0$, $\sinh(0) = \sin(0) = 0$.

Therefore, the only real solution to $\sinh x = \sin x$ is $x = 0$. This gives us one critical point at $x = 0$.

Step 2: Test for Local Extrema using Higher-Order Derivatives.

Since $f'(0) = 0$, we evaluate higher-order derivatives at $x = 0$:

Second Derivative:


$$f''(x) = e^x + e^{-x} - 2\cos x = 2\cosh x - 2\cos x$$


At $x = 0$:


$$f''(0) = 2\cosh(0) - 2\cos(0) = 2(1) - 2(1) = 0$$


Since $f''(0) = 0$, the second derivative test is inconclusive. We must find higher derivatives.

Third Derivative:


$$f'''(x) = e^x - e^{-x} + 2\sin x = 2\sinh x + 2\sin x$$


At $x = 0$:


$$f'''(0) = 2\sinh(0) + 2\sin(0) = 0$$

Fourth Derivative:


$$f^{(4)}(x) = e^x + e^{-x} + 2\cos x = 2\cosh x + 2\cos x$$


At $x = 0$:


$$f^{(4)}(0) = 2\cosh(0) + 2\cos(0) = 2(1) + 2(1) = 4 > 0$$

Step 3: Apply the General Derivative Test.

According to the higher-order derivative test for extrema, if the first non-vanishing derivative at a critical point is of an even order $n$, then:

If $f^{(n)}(c) > 0$, $f(c)$ is a local minimum.

If $f^{(n)}(c) < 0$, $f(c)$ is a local maximum.

Here, the first non-vanishing derivative is $f^{(4)}(0) = 4 > 0$ (which is of even order $n=4$). Thus, $f(x)$ has a local minimum at $x = 0$.

Step 4: Calculate the Extremum (Minimum) Value.

$$f(0) = e^0 + 2\cos(0) + e^{-0} = 1 + 2 + 1 = 4$$

Final Answer:

$$\boxed{\text{Minimum value is } 4 \text{ at } x = 0}$$

topic: Applications of Derivatives
difficulty: Medium
question_type: New
techniques_used:

Higher-Order Derivative Test

Solving Transcendental Equations

CT2 (Sec A) - Q3

discipline: CSE
year: CSE-24
exam_type: CT
section: A
ct_number: 2
question_number: 3


Question:

Define tangent, subtangent normal and subnormal of a curve $f(x)=0$ at $x=x_0$. Find the equation of tangent and normal line to the curve $x = e^{-t}\cos t, y = e^t \sin t$ at $t = \pi$.

Solution:

Part 1: Definitions

Let $P(x_0, y_0)$ be a point on the curve $y = f(x)$. Let $m = \left(\frac{dy}{dx}\right)_{x_0}$ be the slope of the tangent at $P$. Let the tangent and normal at $P$ intersect the $x$-axis at points $T$ and $N$ respectively. Let $G(x_0, 0)$ be the projection of $P$ on the $x$-axis.

Tangent: The line passing through $P(x_0, y_0)$ with slope $m$, representing the limiting state of a secant line through $P$ and an adjacent point as the adjacent point approaches $P$. Its equation is:


$$y - y_0 = m(x - x_0)$$

Normal: The line passing through $P(x_0, y_0)$ perpendicular to the tangent line at $P$. Its slope is $-\frac{1}{m}$ (for $m \neq 0$). Its equation is:


$$y - y_0 = -\frac{1}{m}(x - x_0)$$

Subtangent: The projection of the tangent segment $PT$ on the $x$-axis, which is the segment $TG$. The length of the subtangent is given by:


$$\text{Length} = \left| \frac{y_0}{m} \right|$$

Subnormal: The projection of the normal segment $PN$ on the $x$-axis, which is the segment $GN$. The length of the subnormal is given by:


$$\text{Length} = |y_0 \cdot m|$$

Part 2: Equations of Tangent and Normal Lines to the Parametric Curve

The curve is defined parametrically by:


$$x(t) = e^{-t}\cos t, \quad y(t) = e^t \sin t$$

We need to evaluate the coordinates and the slope at $t = \pi$.

Step 1: Find the coordinates $(x_0, y_0)$ at $t = \pi$.

$$x_0 = x(\pi) = e^{-\pi}\cos(\pi) = e^{-\pi}(-1) = -e^{-\pi}$$

$$y_0 = y(\pi) = e^{\pi}\sin(\pi) = e^{\pi}(0) = 0$$


Thus, the point of contact is:


$$(x_0, y_0) = (-e^{-\pi}, 0)$$

Step 2: Compute the slope of the tangent $m = \frac{dy}{dx}$.

Using parametric differentiation:


$$\frac{dx}{dt} = \frac{d}{dt}(e^{-t}\cos t) = -e^{-t}\cos t - e^{-t}\sin t = -e^{-t}(\cos t + \sin t)$$

$$\frac{dy}{dt} = \frac{d}{dt}(e^t\sin t) = e^t\sin t + e^t\cos t = e^t(\sin t + \cos t)$$

Thus, the slope of the tangent line is:


$$\frac{dy}{dx} = \frac{\frac{dy}{dt}}{\frac{dx}{dt}} = \frac{e^t(\sin t + \cos t)}{-e^{-t}(\cos t + \sin t)} = -e^{2t} \quad (\text{for } \cos t + \sin t \neq 0)$$

At $t = \pi$:


$$\cos\pi + \sin\pi = -1 + 0 = -1 \neq 0$$


So, the slope $m$ at $t = \pi$ is:


$$m = \left. \frac{dy}{dx} \right|_{t=\pi} = -e^{2\pi}$$

Step 3: Find the equation of the tangent line.

Using the point-slope form with point $(-e^{-\pi}, 0)$ and slope $m = -e^{2\pi}$:


$$y - 0 = -e^{2\pi}\left(x - (-e^{-\pi})\right)$$

$$y = -e^{2\pi}(x + e^{-\pi})$$

$$y = -e^{2\pi}x - e^{\pi}$$


Rearranging into standard form:


$$e^{2\pi}x + y + e^{\pi} = 0$$

Step 4: Find the equation of the normal line.

The slope of the normal line is $-\frac{1}{m} = \frac{1}{e^{2\pi}} = e^{-2\pi}$.
Using the point-slope form with point $(-e^{-\pi}, 0)$ and slope $e^{-2\pi}$:


$$y - 0 = e^{-2\pi}\left(x - (-e^{-\pi})\right)$$

$$y = e^{-2\pi}(x + e^{-\pi})$$

$$y = e^{-2\pi}x + e^{-3\pi}$$


Rearranging into standard form:


$$e^{-2\pi}x - y + e^{-3\pi} = 0$$


Multiplying the entire equation by $e^{3\pi}$ yields:


$$e^{\pi}x - e^{3\pi}y + 1 = 0$$

Final Answer:

$$\text{Equation of Tangent: } \boxed{e^{2\pi}x + y + e^{\pi} = 0}$$

$$\text{Equation of Normal: } \boxed{e^{\pi}x - e^{3\pi}y + 1 = 0}$$

topic: Applications of Derivatives
difficulty: Medium
question_type: New
techniques_used:

Parametric Differentiation

Tangent and Normal Formulations

CT2 (Sec A) - Q4

discipline: CSE
year: CSE-24
exam_type: CT
section: A
ct_number: 2
question_number: 4


Question:

Evaluate $\lim_{x\to 0} \frac{e^x - e^{\sin x}}{x - \sin x}$.

Solution:

We want to evaluate:


$$L = \lim_{x\to 0} \frac{e^x - e^{\sin x}}{x - \sin x}$$

Checking the limit directly, as $x \to 0$:

Numerator: $e^0 - e^{\sin 0} = 1 - 1 = 0$

Denominator: $0 - \sin 0 = 0$

This is an indeterminate form of type $\frac{0}{0}$. We can solve this elegantly using factorization and substitution.

Step 1: Factorize the numerator.

We can factor out $e^{\sin x}$ from the numerator:


$$e^x - e^{\sin x} = e^{\sin x}\left(\frac{e^x}{e^{\sin x}} - 1\right) = e^{\sin x}\left(e^{x - \sin x} - 1\right)$$

Step 2: Substitute back into the limit expression.

$$L = \lim_{x\to 0} \frac{e^{\sin x}\left(e^{x - \sin x} - 1\right)}{x - \sin x}$$

Using the product rule for limits:


$$L = \left(\lim_{x\to 0} e^{\sin x}\right) \cdot \left(\lim_{x\to 0} \frac{e^{x - \sin x} - 1}{x - \sin x}\right)$$

Step 3: Evaluate each limit separately.

For the first limit:


$$\lim_{x\to 0} e^{\sin x} = e^{\sin 0} = e^0 = 1$$

For the second limit, let $u = x - \sin x$.
As $x \to 0$, we have $u \to 0 - \sin 0 = 0$.
Therefore, the limit simplifies to the standard limit:


$$\lim_{u\to 0} \frac{e^u - 1}{u} = 1$$

Step 4: Multiply the results.

$$L = 1 \cdot 1 = 1$$

Alternative Method (using Taylor Series Expansions)

Recall the expansions about $x = 0$:


$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + O(x^4)$$

$$\sin x = x - \frac{x^3}{3!} + O(x^5)$$

Using the expansion of $\sin x$ inside the exponential series:


$$e^{\sin x} = 1 + \sin x + \frac{\sin^2 x}{2!} + \frac{\sin^3 x}{3!} + O(\sin^4 x)$$

$$e^{\sin x} = 1 + \left(x - \frac{x^3}{6}\right) + \frac{1}{2}\left(x - \frac{x^3}{6}\right)^2 + \frac{1}{6}\left(x - \frac{x^3}{6}\right)^3 + O(x^4)$$

$$e^{\sin x} = 1 + x - \frac{x^3}{6} + \frac{x^2}{2} + \frac{x^3}{6} + O(x^4) = 1 + x + \frac{x^2}{2} + O(x^4)$$

Subtracting $e^{\sin x}$ from $e^x$:


$$e^x - e^{\sin x} = \left(1 + x + \frac{x^2}{2} + \frac{x^3}{6} + O(x^4)\right) - \left(1 + x + \frac{x^2}{2} + O(x^4)\right) = \frac{x^3}{6} + O(x^4)$$

For the denominator:


$$x - \sin x = x - \left(x - \frac{x^3}{6} + O(x^5)\right) = \frac{x^3}{6} + O(x^5)$$

Substituting these series expansions into the limit:


$$L = \lim_{x\to 0} \frac{\frac{x^3}{6} + O(x^4)}{\frac{x^3}{6} + O(x^5)} = \lim_{x\to 0} \frac{\frac{1}{6} + O(x)}{\frac{1}{6} + O(x^2)} = \frac{\frac{1}{6}}{\frac{1}{6}} = 1$$

Both methods yield the same result.

Final Answer:

$$\boxed{1}$$

topic: Limits
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:

Substitution of Standard Limits

Taylor Series Expansion

CT2 (Sec A) - Q5

discipline: CSE
year: CSE-24
exam_type: CT
section: A
ct_number: 2
question_number: 5


Question:

If $u = \tan^{-1} \frac{x^3 + y^3}{x + y}$ then construct the relation $x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \sin 2u$.

Solution:

We are given:


$$u = \tan^{-1} \left( \frac{x^3 + y^3}{x + y} \right)$$

Taking the tangent of both sides:


$$\tan u = \frac{x^3 + y^3}{x + y}$$

Let us define a new function $V(x, y)$ such that:


$$V(x, y) = \tan u = \frac{x^3 + y^3}{x + y}$$

Step 1: Test $V(x,y)$ for homogeneity.

To check if $V(x, y)$ is a homogeneous function of degree $n$, we substitute $x \to tx$ and $y \to ty$:


$$V(tx, ty) = \frac{(tx)^3 + (ty)^3}{(tx) + (ty)} = \frac{t^3(x^3 + y^3)}{t(x + y)} = t^2 \left( \frac{x^3 + y^3}{x + y} \right) = t^2 V(x, y)$$

Since $V(tx, ty) = t^2 V(x, y)$, $V(x, y)$ is a homogeneous function of degree $n = 2$ in variables $x$ and $y$.

Step 2: Apply Euler's Theorem on Homogeneous Functions.

Euler's Theorem states that if a function $V(x, y)$ is homogeneous of degree $n$ in $x$ and $y$, then:


$$x\frac{\partial V}{\partial x} + y\frac{\partial V}{\partial y} = nV$$

Substituting $n = 2$:


$$x\frac{\partial V}{\partial x} + y\frac{\partial V}{\partial y} = 2V \quad \text{--- (Equation 1)}$$

Step 3: Compute the partial derivatives of $V$ in terms of $u$.

Since $V = \tan u$, we use the chain rule to differentiate with respect to $x$ and $y$:


$$\frac{\partial V}{\partial x} = \frac{d(\tan u)}{du} \cdot \frac{\partial u}{\partial x} = \sec^2 u \frac{\partial u}{\partial x}$$

$$\frac{\partial V}{\partial y} = \frac{d(\tan u)}{du} \cdot \frac{\partial u}{\partial y} = \sec^2 u \frac{\partial u}{\partial y}$$

Step 4: Substitute these partial derivatives into Equation 1.

$$x \left( \sec^2 u \frac{\partial u}{\partial x} \right) + y \left( \sec^2 u \frac{\partial u}{\partial y} \right) = 2 \tan u$$

Divide both sides by $\sec^2 u$:


$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \frac{2 \tan u}{\sec^2 u}$$

Step 5: Simplify the trigonometric expression on the right-hand side.

$$\frac{2 \tan u}{\sec^2 u} = 2 \left( \frac{\sin u}{\cos u} \right) \cdot \cos^2 u = 2 \sin u \cos u = \sin 2u$$

Substituting this back gives the desired relation:


$$x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \sin 2u$$

Final Answer:

$$\boxed{x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = \sin 2u}$$

topic: Partial Derivatives
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:

Euler's Theorem on Homogeneous Functions

Chain Rule for Partial Differentiation