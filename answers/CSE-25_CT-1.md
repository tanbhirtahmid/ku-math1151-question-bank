CSE 25 • CT • CSE • Question 1

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 1


Question

Draw the graph of the following function and find the domain and range of it.


$$f(x) = \begin{cases} 0, & x \le -1 \\ \sqrt{1-x^2}, & -1 < x < 1 \\ x, & x \ge 1 \end{cases}$$

Solution

Step 1: Analyze the piecewise components of the function

Interval 1 ($x \le -1$): $f(x) = 0$. This is a horizontal line segment along the x-axis starting from $-\infty$ up to and including $x = -1$.

Interval 2 ($-1 < x < 1$): $f(x) = \sqrt{1-x^2}$. Squaring both sides gives $y^2 = 1 - x^2 \implies x^2 + y^2 = 1$. Since $y = \sqrt{1-x^2} \ge 0$, this represents the upper semi-circle of radius $1$ centered at the origin $(0,0)$, excluding the boundary points at $x = -1$ and $x = 1$.

Interval 3 ($x \ge 1$): $f(x) = x$. This represents a straight line with a slope of $1$ passing through the origin, starting from $x = 1$ (where $y = 1$) to $+\infty$.

Step 2: Determine the Domain
The function is defined for:

$x \le -1$

$-1 < x < 1$

$x \ge 1$

The union of these intervals covers all real numbers: $(-\infty, -1] \cup (-1, 1) \cup [1, \infty) = \mathbb{R}$.
Thus, the Domain of $f(x)$ is $\mathbb{R}$ or $(-\infty, \infty)$.

Step 3: Determine the Range
Let us find the output values ($y = f(x)$) for each interval:

For $x \le -1$: $y = 0$.

For $-1 < x < 1$: $y = \sqrt{1-x^2}$. As $x$ ranges from $-1$ to $1$, the value of $1-x^2$ ranges within $(0, 1]$, so $y \in (0, 1]$.

For $x \ge 1$: $y = x$. Since $x \ge 1$, $y \in [1, \infty)$.

Taking the union of all outputs:


$$\text{Range} = \{0\} \cup (0, 1] \cup [1, \infty) = [0, \infty)$$

Step 4: Describe the Graph

From $-\infty$ to $-1$: A solid horizontal line along the x-axis ($y = 0$) terminating at a solid dot at $(-1, 0)$.

From $-1$ to $1$: A semi-circular curve rising from $(-1, 0)$ to its peak at $(0, 1)$ and returning down towards $(1, 0)$. Note that at $x = -1$ and $x = 1$, the semi-circle values approach $0$. Since $(-1, 0)$ is already included in the first piece, there is no hole there. At $x = 1$, the circle piece approaches $0$ but is not defined there.

From $1$ to $\infty$: A solid ray starting with a solid dot at $(1, 1)$ and going upwards to the right along the line $y = x$. Note that since the second piece approaches $0$ at $x \to 1^-$ and the third piece starts at $1$ at $x = 1$, there is a jump discontinuity at $x = 1$. There is an open circle at $(1, 0)$ from the left limit of the second piece, and a solid dot at $(1, 1)$ for the third piece.

Answer

$$\text{Domain: } \mathbb{R} \quad (-\infty, \infty)$$

$$\text{Range: } [0, \infty)$$

$$\text{Graph Description: } y=0 \text{ for } x \le -1\text{, upper semicircle of } x^2+y^2=1 \text{ for } -1 < x < 1\text{, and } y=x \text{ for } x \ge 1 \text{ with a jump discontinuity at } x=1.$$

Classification

topic: Continuity
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Piecewise Analysis
  - Domain and Range Evaluation
  - Graphical Analysis


CSE 25 • CT • CSE • Question 2

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 2


Question

Wrote the conditions of continuity. Discuss the continuity of the following function at $x = 0$


$$f(x) = \begin{cases} x \cos \dfrac{1}{x} & \text{if } x \neq 0 \\ 0 & \text{if } x = 0 \end{cases}$$

Solution

Step 1: Write the conditions of continuity
A function $f(x)$ is defined to be continuous at a point $x = a$ if and only if the following three conditions are satisfied:

$f(a)$ is defined (i.e., $a$ is in the domain of $f$).

$\lim_{x \to a} f(x)$ exists.

$\lim_{x \to a} f(x) = f(a)$.

Step 2: Evaluate $f(0)$
From the definition of the function:


$$f(0) = 0$$

Step 3: Evaluate the limit $\lim_{x \to 0} f(x)$
We need to find:


$$\lim_{x \to 0} x \cos \frac{1}{x}$$


We use the Squeeze Theorem (Sandwich Theorem):
Since the range of the cosine function is $[-1, 1]$ for all real inputs, we have:


$$-1 \le \cos \frac{1}{x} \le 1 \quad \text{for all } x \neq 0$$


Multiply all terms of the inequality by $|x|$ (since $|x| \ge 0$):


$$-|x| \le x \cos \frac{1}{x} \le |x|$$


Now, take the limit as $x \to 0$:


$$\lim_{x \to 0} (-|x|) = 0 \quad \text{and} \quad \lim_{x \to 0} |x| = 0$$


By the Squeeze Theorem:


$$\lim_{x \to 0} x \cos \frac{1}{x} = 0$$

Step 4: Check if the limit equals the function value


$$\lim_{x \to 0} f(x) = 0 = f(0)$$


Since all three conditions of continuity are satisfied, the function $f(x)$ is continuous at $x = 0$.

Answer

$$\text{Conditions of continuity at } x=a: \text{ (1) } f(a) \text{ exists, (2) } \lim_{x\to a}f(x) \text{ exists, (3) } \lim_{x\to a}f(x) = f(a).$$

$$\text{The function is continuous at } x = 0.$$

Classification

topic: Continuity
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:
  - Squeeze Theorem
  - Limit Evaluation


CSE 25 • CT • CSE • Question 3(i)

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(i)


Question

Find $\dfrac{dy}{dx}$ of $y = \sin^{-1}\left(e^{\tan^{-1} x}\right)$.

Solution

Step 1: Apply the Chain Rule
Let $u = e^{\tan^{-1} x}$. Then $y = \sin^{-1}(u)$.
The derivative of $y$ with respect to $x$ is:


$$\frac{dy}{dx} = \frac{d}{du}\left(\sin^{-1}u\right) \cdot \frac{du}{dx}$$

$$\frac{dy}{dx} = \frac{1}{\sqrt{1-u^2}} \cdot \frac{d}{dx}\left(e^{\tan^{-1} x}\right)$$

Step 2: Differentiate $e^{\tan^{-1} x}$
Let $v = \tan^{-1} x$. Then $u = e^v$.


$$\frac{du}{dx} = e^v \cdot \frac{dv}{dx} = e^{\tan^{-1} x} \cdot \frac{1}{1+x^2}$$

Step 3: Combine the derivatives
Substitute $\frac{du}{dx}$ and $u$ back into the equation:


$$\frac{dy}{dx} = \frac{1}{\sqrt{1-\left(e^{\tan^{-1} x}\right)^2}} \cdot \frac{e^{\tan^{-1} x}}{1+x^2}$$

$$\frac{dy}{dx} = \frac{e^{\tan^{-1} x}}{(1+x^2)\sqrt{1 - e^{2\tan^{-1} x}}}$$

Answer

$$\boxed{\frac{dy}{dx} = \frac{e^{\tan^{-1} x}}{(1+x^2)\sqrt{1 - e^{2\tan^{-1} x}}}}$$

Classification

topic: Differentiation
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:
  - Chain Rule
  - Inverse Trigonometric Derivatives
  - Exponential Derivatives


CSE 25 • CT • CSE • Question 3(ii)

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(ii)


Question

Find $\dfrac{dy}{dx}$ of $y = (\tan x)^{\cot x} + (\cot x)^{\tan x}$.

Solution

Step 1: Use logarithmic differentiation on each term
Let $y = u + v$, where:


$$u = (\tan x)^{\cot x}$$

$$v = (\cot x)^{\tan x}$$


Then:


$$\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}$$

Step 2: Find $\frac{du}{dx}$
Take the natural logarithm of $u$:


$$\ln u = \ln\left((\tan x)^{\cot x}\right) = \cot x \ln(\tan x)$$


Differentiate both sides with respect to $x$ using the product rule:


$$\frac{1}{u}\frac{du}{dx} = \frac{d}{dx}(\cot x) \cdot \ln(\tan x) + \cot x \cdot \frac{d}{dx}(\ln(\tan x))$$

$$\frac{1}{u}\frac{du}{dx} = -\csc^2 x \ln(\tan x) + \cot x \cdot \frac{1}{\tan x} \cdot \sec^2 x$$


Since $\cot x \cdot \frac{1}{\tan x} = \cot^2 x$:


$$\cot x \cdot \frac{1}{\tan x} \cdot \sec^2 x = \frac{\cos^2 x}{\sin^2 x} \cdot \frac{1}{\cos^2 x} = \frac{1}{\sin^2 x} = \csc^2 x$$


Therefore:


$$\frac{1}{u}\frac{du}{dx} = -\csc^2 x \ln(\tan x) + \csc^2 x = \csc^2 x (1 - \ln(\tan x))$$

$$\frac{du}{dx} = u \cdot \csc^2 x (1 - \ln(\tan x)) = (\tan x)^{\cot x} \csc^2 x (1 - \ln(\tan x))$$

Step 3: Find $\frac{dv}{dx}$
Take the natural logarithm of $v$:


$$\ln v = \ln\left((\cot x)^{\tan x}\right) = \tan x \ln(\cot x)$$


Differentiate both sides with respect to $x$ using the product rule:


$$\frac{1}{v}\frac{dv}{dx} = \frac{d}{dx}(\tan x) \cdot \ln(\cot x) + \tan x \cdot \frac{d}{dx}(\ln(\cot x))$$

$$\frac{1}{v}\frac{dv}{dx} = \sec^2 x \ln(\cot x) + \tan x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x)$$


Since $\tan x \cdot \frac{1}{\cot x} = \tan^2 x$:


$$\tan x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x) = -\frac{\sin^2 x}{\cos^2 x} \cdot \frac{1}{\sin^2 x} = -\frac{1}{\cos^2 x} = -\sec^2 x$$


Therefore:


$$\frac{1}{v}\frac{dv}{dx} = \sec^2 x \ln(\cot x) - \sec^2 x = \sec^2 x (\ln(\cot x) - 1)$$

$$\frac{dv}{dx} = v \cdot \sec^2 x (\ln(\cot x) - 1) = (\cot x)^{\tan x} \sec^2 x (\ln(\cot x) - 1)$$

Step 4: Combine the results


$$\frac{dy}{dx} = (\tan x)^{\cot x} \csc^2 x (1 - \ln(\tan x)) + (\cot x)^{\tan x} \sec^2 x (\ln(\cot x) - 1)$$

Answer

$$\boxed{\frac{dy}{dx} = (\tan x)^{\cot x} \csc^2 x (1 - \ln(\tan x)) + (\cot x)^{\tan x} \sec^2 x (\ln(\cot x) - 1)}$$

Classification

topic: Differentiation
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Logarithmic Differentiation
  - Product Rule
  - Chain Rule


CSE 25 • CT • CSE • Question 3(iii)

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(iii)


Question

Find $\dfrac{dy}{dx}$ of $x^y = e^{x-y}$.

Solution

Step 1: Simplify the implicit equation using logarithms
Taking the natural logarithm of both sides:


$$\ln\left(x^y\right) = \ln\left(e^{x-y}\right)$$

$$y \ln x = x - y$$

Step 2: Express $y$ explicitly in terms of $x$ (optional but simplifies differentiation)
Collect all terms containing $y$ on one side:


$$y \ln x + y = x$$

$$y(\ln x + 1) = x$$

$$y = \frac{x}{1 + \ln x}$$

Step 3: Differentiate with respect to $x$ using the Quotient Rule
Using the quotient rule $\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{u'v - uv'}{v^2}$:
Let $u = x \implies u' = 1$
Let $v = 1 + \ln x \implies v' = \frac{1}{x}$


$$\frac{dy}{dx} = \frac{(1)(1 + \ln x) - (x)\left(\frac{1}{x}\right)}{(1 + \ln x)^2}$$

$$\frac{dy}{dx} = \frac{1 + \ln x - 1}{(1 + \ln x)^2} = \frac{\ln x}{(1 + \ln x)^2}$$

Answer

$$\boxed{\frac{dy}{dx} = \frac{\ln x}{(1 + \ln x)^2}}$$

Classification

topic: Differentiation
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:
  - Logarithmic Differentiation
  - Quotient Rule


CSE 25 • CT • CSE • Question 4

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 4


Question

State and the Leibnitz's theorem. If $y = \sin\left(a \sin^{-1} x\right)$ then show that


$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} + (n^2 - a^2)y_n = 0$$


also find $(y_n)_0$.

Solution

Step 1: Statement of Leibnitz's Theorem
If $u(x)$ and $v(x)$ are two functions of $x$ possessing derivatives of the $n$-th order, then the $n$-th derivative of their product $uv$ is given by:


$$(uv)_n = u_n v + ^nC_1 u_{n-1} v_1 + ^nC_2 u_{n-2} v_2 + \dots + ^nC_r u_{n-r} v_r + \dots + u v_n$$


which can be written as:


$$\frac{d^n}{dx^n}(uv) = \sum_{r=0}^{n} \binom{n}{r} u_{n-r} v_r$$


where $u_r = \frac{d^r u}{dx^r}$ and $v_r = \frac{d^r v}{dx^r}$.

Step 2: Differentiate the given function to establish the base second-order equation
Given:


$$y = \sin(a \sin^{-1} x) \tag{1}$$


Differentiating once with respect to $x$:


$$y_1 = \cos(a \sin^{-1} x) \cdot \frac{a}{\sqrt{1-x^2}}$$


Multiply by $\sqrt{1-x^2}$:


$$\sqrt{1-x^2} y_1 = a \cos(a \sin^{-1} x)$$


Squaring both sides to remove the radical:


$$(1-x^2) y_1^2 = a^2 \cos^2(a \sin^{-1} x)$$


Using $\cos^2 \theta = 1 - \sin^2 \theta$:


$$(1-x^2) y_1^2 = a^2 \left[1 - \sin^2(a \sin^{-1} x)\right]$$


Substitute $y = \sin(a \sin^{-1} x)$ from (1):


$$(1-x^2) y_1^2 = a^2 (1 - y^2) \tag{2}$$


Differentiate both sides with respect to $x$ using the chain rule and product rule:


$$\frac{d}{dx}\left(1-x^2\right) \cdot y_1^2 + (1-x^2) \cdot \frac{d}{dx}\left(y_1^2\right) = a^2 \frac{d}{dx}(1-y^2)$$

$$-2x y_1^2 + (1-x^2) \cdot 2y_1 y_2 = a^2 (-2y y_1)$$


Divide both sides by $2y_1$ (assuming $y_1 \neq 0$):


$$-x y_1 + (1-x^2)y_2 = -a^2 y$$


Rearranging terms:


$$(1-x^2)y_2 - xy_1 + a^2 y = 0 \tag{3}$$

Step 3: Apply Leibnitz's Theorem to find the $n$-th derivative
Differentiating equation (3) $n$ times using Leibnitz's Theorem:


$$\frac{d^n}{dx^n}\left[(1-x^2)y_2\right] - \frac{d^n}{dx^n}\left[xy_1\right] + a^2 \frac{d^n}{dx^n}[y] = 0$$

Term 1: $\frac{d^n}{dx^n}\left[(1-x^2)y_2\right]$
Let $u = y_2$ and $v = 1-x^2$. Here $v_1 = -2x$, $v_2 = -2$, and $v_r = 0$ for $r \ge 3$.


$$(u v)_n = y_{n+2}(1-x^2) + n y_{n+1}(-2x) + \frac{n(n-1)}{2} y_n (-2)$$

$$(u v)_n = (1-x^2)y_{n+2} - 2nxy_{n+1} - n(n-1)y_n$$

Term 2: $\frac{d^n}{dx^n}\left[xy_1\right]$
Let $u = y_1$ and $v = x$. Here $v_1 = 1$, and $v_r = 0$ for $r \ge 2$.


$$(u v)_n = y_{n+1}(x) + n y_n (1) = x y_{n+1} + n y_n$$

Substitute these back into the differentiated equation:


$$\left[(1-x^2)y_{n+2} - 2nxy_{n+1} - n(n-1)y_n\right] - \left[xy_{n+1} + ny_n\right] + a^2 y_n = 0$$


Group the terms of $y_{n+2}$, $y_{n+1}$, and $y_n$:


$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - [n(n-1) + n - a^2]y_n = 0$$

$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} + (a^2 - n^2)y_n = 0$$


Wait, looking closely at the requested relation in the question sheet:


$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} + (n^2-a^2)y_n = 0$$


Let's double-check the signs:
On the last line of Step 2, we had:


$$(1-x^2)y_2 - xy_1 = -a^2 y \implies (1-x^2)y_2 - xy_1 + a^2 y = 0$$


Differentiating:


$$- n(n-1)y_n - ny_n + a^2 y_n = (-n^2 + n - n + a^2)y_n = -(n^2 - a^2)y_n$$


So:


$$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2 - a^2)y_n = 0$$


Let us re-verify:
From $(1-x^2)y_2 - xy_1 + a^2 y = 0$, applying Leibnitz:
$y_{n+2}(1-x^2) + n y_{n+1}(-2x) + \frac{n(n-1)}{2}y_n(-2) - [y_{n+1}x + n y_n] + a^2 y_n = 0$
$(1-x^2)y_{n+2} - 2nxy_{n+1} - n(n-1)y_n - xy_{n+1} - ny_n + a^2 y_n = 0$
$(1-x^2)y_{n+2} - (2n+1)xy_{n+1} + (a^2 - n^2)y_n = 0$
This matches $(1-x^2)y_{n+2} - (2n+1)xy_{n+1} - (n^2 - a^2)y_n = 0$.
Note: The question paper has a typo in the CT-4 problem showing $+ (n^2 - a^2)y_n = 0$ instead of $- (n^2 - a^2)y_n = 0$. We will present the mathematically correct derivation which leads to $- (n^2 - a^2)y_n = 0$ or $+ (a^2 - n^2)y_n = 0$.

Step 4: Find the value of $(y_n)_0$
Let's evaluate $y$, $y_1$, and $y_2$ at $x = 0$:

$y(0) = \sin(a \sin^{-1} 0) = 0$

$y_1(0) = \frac{a \cos(a \sin^{-1} 0)}{\sqrt{1-0^2}} = a$

From $(1-x^2)y_2 - xy_1 + a^2 y = 0 \implies y_2(0) - 0 + 0 = 0 \implies y_2(0) = 0$

Now substitute $x = 0$ into the Leibnitz relation:


$$(1-0) (y_{n+2})_0 - (2n+1)(0)(y_{n+1})_0 + (a^2 - n^2)(y_n)_0 = 0$$

$$(y_{n+2})_0 = (n^2 - a^2)(y_n)_0 \tag{4}$$

Let us analyze the recurrence relation step-by-step for odd and even values of $n$:

Case 1: $n$ is even
Let $n = 2k$.


$$(y_{2})_0 = 0$$

$$(y_{4})_0 = (2^2 - a^2)(y_2)_0 = 0$$


By mathematical induction, for any even integer $n$:


$$(y_n)_0 = 0 \quad \text{for even } n$$

Case 2: $n$ is odd
Let $n = 2k+1$.
Using the recurrence relation (4):


$$(y_3)_0 = (1^2 - a^2)(y_1)_0 = (1^2 - a^2)a$$

$$(y_5)_0 = (3^2 - a^2)(y_3)_0 = (3^2 - a^2)(1^2 - a^2)a$$


By general induction, for an odd integer $n$:


$$(y_n)_0 = a(1^2 - a^2)(3^2 - a^2)\dots((n-2)^2 - a^2)$$

Answer

$$\text{Leibnitz's Theorem: } (uv)_n = \sum_{r=0}^{n} \binom{n}{r} u_{n-r} v_r$$

$$\text{Proven Relation: } (1-x^2)y_{n+2} - (2n+1)xy_{n+1} + (a^2 - n^2)y_n = 0$$

$$(y_n)_0 = \begin{cases} 0, & \text{if } n \text{ is even} \\ a(1^2 - a^2)(3^2 - a^2)\dots((n-2)^2 - a^2), & \text{if } n \text{ is odd} \end{cases}$$

Classification

topic: Applications of Derivatives
difficulty: Hard
question_type: Repeated PYQ Pattern
techniques_used:
  - Leibnitz's Theorem
  - Successive Differentiation
  - Recurrence Relations


CSE 25 • CT • CSE • Question 5

discipline: CSE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 5


Question

Find the nth derivatives of $y = e^{ax}\sin(bx+c)$.

Solution

Step 1: Calculate the first few derivatives to find a pattern
Given:


$$y = e^{ax} \sin(bx+c)$$

Differentiating once with respect to $x$:


$$y_1 = a e^{ax} \sin(bx+c) + b e^{ax} \cos(bx+c)$$

$$y_1 = e^{ax} [a \sin(bx+c) + b \cos(bx+c)]$$

Step 2: Introduce polar coordinates to simplify the trigonometric terms
Let:


$$a = r \cos \phi \tag{1}$$

$$b = r \sin \phi \tag{2}$$

Squaring and adding equations (1) and (2):


$$a^2 + b^2 = r^2(\cos^2 \phi + \sin^2 \phi) \implies r = \sqrt{a^2 + b^2}$$


Dividing (2) by (1):


$$\tan \phi = \frac{b}{a} \implies \phi = \tan^{-1}\left(\frac{b}{a}\right)$$

Substitute these values back into $y_1$:


$$y_1 = e^{ax} [r \cos \phi \sin(bx+c) + r \sin \phi \cos(bx+c)]$$


Using the trigonometric identity $\sin A \cos B + \cos A \sin B = \sin(A+B)$:


$$y_1 = r e^{ax} \sin(bx+c+\phi)$$

Step 3: Generalize to the $n$-th derivative
Differentiating again using the same transformation:


$$y_2 = r^2 e^{ax} \sin(bx+c+2\phi)$$


By mathematical induction, the $n$-th derivative is:


$$y_n = r^n e^{ax} \sin(bx+c+n\phi)$$

Substitute the expressions for $r$ and $\phi$ back into the formula:


$$y_n = (a^2+b^2)^{n/2} e^{ax} \sin\left(bx+c+n\tan^{-1}\frac{b}{a}\right)$$

Answer

$$\boxed{y_n = (a^2+b^2)^{n/2} e^{ax} \sin\left(bx+c+n\tan^{-1}\frac{b}{a}\right)}$$

Classification

topic: Differentiation
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Successive Differentiation
  - Polar Coordinate Transformation


CSE 25 • CT • ECE • Question 1

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 1


Question

Define one-one and onto functions with examples. Draw the graph and also find the domain and range of


$$f(x) = |x-4| + |x| + |x+4|$$

Solution

Step 1: Define One-One (Injective) Function
A function $f: A \to B$ is said to be a one-one (or injective) function if distinct elements of the domain $A$ have distinct images in the codomain $B$.
Mathematically:


$$\forall x_1, x_2 \in A, \quad f(x_1) = f(x_2) \implies x_1 = x_2$$


Example: $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = 2x + 3$ is one-one because if $2x_1 + 3 = 2x_2 + 3$, then $x_1 = x_2$.

Step 2: Define Onto (Surjective) Function
A function $f: A \to B$ is said to be an onto (or surjective) function if every element in the codomain $B$ is the image of at least one element in the domain $A$.
Mathematically:


$$\text{Range}(f) = B \quad \text{or} \quad \forall y \in B, \exists x \in A \text{ such that } f(x) = y$$


Example: $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^3$ is onto because for any real number $y$, there exists a real number $x = \sqrt[3]{y}$ such that $f(x) = y$.

Step 3: Analyze the function $f(x) = |x-4| + |x| + |x+4|$
The critical points where the expressions inside the absolute value change sign are $x = -4$, $x = 0$, and $x = 4$. This divides the real number line into four intervals:

Interval 1: $x < -4$
All terms inside the absolute values are negative:


$$f(x) = -(x-4) - x - (x+4) = -x + 4 - x - x - 4 = -3x$$

Interval 2: $-4 \le x < 0$
$(x+4) \ge 0$, while $(x-4) < 0$ and $x < 0$:


$$f(x) = -(x-4) - x + (x+4) = -x + 4 - x + x + 4 = -x + 8$$

Interval 3: $0 \le x < 4$
$(x+4) > 0$ and $x \ge 0$, while $(x-4) < 0$:


$$f(x) = -(x-4) + x + (x+4) = -x + 4 + x + x + 4 = x + 8$$

Interval 4: $x \ge 4$
All terms inside the absolute values are non-negative:


$$f(x) = (x-4) + x + (x+4) = 3x$$

Thus, the piecewise function is:


$$f(x) = \begin{cases} -3x, & x < -4 \\ -x+8, & -4 \le x < 0 \\ x+8, & 0 \le x < 4 \\ 3x, & x \ge 4 \end{cases}$$

Step 4: Find Domain and Range

Domain: The function is a sum of absolute value functions, which are defined for all real numbers. Thus, Domain = $\mathbb{R}$ or $(-\infty, \infty)$.

Range: Let us look at the vertices/boundary points of our piecewise linear function:

For $x < -4$: $f(x) = -3x > 12$.

At $x = -4$: $f(-4) = -(-4) + 8 = 12$.

At $x = 0$: $f(0) = 0 + 8 = 8$.

At $x = 4$: $f(4) = 3(4) = 12$.

For $x \ge 4$: $f(x) = 3x \ge 12$.

Since the function is continuous, its value decreases from $\infty$ down to $12$ (at $x=-4$), then decreases to a minimum of $8$ (at $x=0$), then increases back to $12$ (at $x=4$), and finally goes up to $\infty$.
Therefore, the minimum value of $f(x)$ is $8$, and it goes to $+\infty$ on both sides.
Range = $[8, \infty)$.

Step 5: Describe the Graph
The graph is symmetric about the y-axis (since $f(-x) = |-x-4| + |-x| + |-x+4| = |x+4| + |x| + |x-4| = f(x)$):

Starting from left to right:

A steep line coming from infinity with slope $-3$ until it hits the point $(-4, 12)$.

A gentler line with slope $-1$ connecting $(-4, 12)$ to the global minimum at $(0, 8)$.

A line with slope $+1$ connecting $(0, 8)$ to the point $(4, 12)$.

A steep line with slope $+3$ rising to infinity from $(4, 12)$.

Answer

One-One Function: A function where $f(x_1) = f(x_2) \implies x_1 = x_2$. Example: $f(x) = 2x$.

Onto Function: A function where the Range equals the Codomain. Example: $f(x) = x^3$ for $f: \mathbb{R} \to \mathbb{R}$.

Domain of $f(x)$: $(-\infty, \infty)$

Range of $f(x)$: $[8, \infty)$

Graph: Piecewise linear V-shaped curve with vertices at $(-4, 12)$, $(0, 8)$, and $(4, 12)$.

Classification

topic: Continuity
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Piecewise Linearization of Absolute Values
  - Graphical Analysis
  - Domain and Range Evaluation


CSE 25 • CT • ECE • Question 2

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 2


Question

Define limit of a function. A function is defined by


$$f(x) = \begin{cases} \dfrac{\sin^2 ax}{x^2} & \text{if } x \neq 0 \\ 1 & \text{if } x = 0 \end{cases}$$


Test the continuity of $f(x)$ at $x = 0$.

Solution

Step 1: Define the limit of a function
Let $f(x)$ be a function defined on an open interval containing $c$ (except possibly at $c$). We say that the limit of $f(x)$ as $x$ approaches $c$ is $L$, written as:


$$\lim_{x \to c} f(x) = L$$


if for every $\epsilon > 0$, there exists a $\delta > 0$ such that:


$$0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$$

Step 2: Test the continuity of the given function at $x = 0$
A function $f(x)$ is continuous at $x = 0$ if and only if:


$$\lim_{x \to 0} f(x) = f(0)$$

Given:

$f(0) = 1$

For $x \neq 0$, $f(x) = \dfrac{\sin^2 ax}{x^2}$

Let us find the limit:


$$\lim_{x \to 0} f(x) = \lim_{x \to 0} \frac{\sin^2 ax}{x^2}$$


We can rewrite the expression as:


$$\lim_{x \to 0} \left(\frac{\sin ax}{x}\right)^2 = \lim_{x \to 0} \left(a \cdot \frac{\sin ax}{ax}\right)^2$$


Since $\lim_{\theta \to 0} \frac{\sin \theta}{\theta} = 1$:


$$\lim_{x \to 0} \left(a \cdot \frac{\sin ax}{ax}\right)^2 = \left(a \cdot 1\right)^2 = a^2$$

Step 3: Compare the limit to the value of the function

$\lim_{x \to 0} f(x) = a^2$

$f(0) = 1$

For the function to be continuous at $x = 0$, we must have:


$$a^2 = 1 \implies a = \pm 1$$

If $a = \pm 1$, the function is continuous at $x = 0$.

If $a \neq \pm 1$, the function is discontinuous at $x = 0$ (removable discontinuity).

Answer

Limit Definition: $\lim_{x \to c} f(x) = L$ if for every $\epsilon > 0$, there is a $\delta > 0$ such that $0 < |x - c| < \delta \implies |f(x) - L| < \epsilon$.

Continuity Test: The limit as $x \to 0$ is $a^2$. The function is continuous at $x = 0$ if and only if $a = \pm 1$. Otherwise, it is discontinuous.

Classification

topic: Continuity
difficulty: Easy
question_type: Repeated PYQ Pattern
techniques_used:
  - Limit Definition
  - Standard Trigonometric Limits
  - Continuity Verification


CSE 25 • CT • ECE • Question 3(i)

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(i)


Question

Find $\dfrac{dy}{dx}$ of $y = \sin\left(2\tan^{-1}\sqrt{\dfrac{1-x}{1+x}}\right)$.

Solution

Step 1: Simplify the trigonometric expression using substitution
Let $x = \cos \theta \implies \theta = \cos^{-1} x$.
Substitute this into the expression inside the inverse tangent:


$$\sqrt{\frac{1-x}{1+x}} = \sqrt{\frac{1-\cos \theta}{1+\cos \theta}}$$


Recall the half-angle identities:

$1 - \cos \theta = 2 \sin^2 \frac{\theta}{2}$

$1 + \cos \theta = 2 \cos^2 \frac{\theta}{2}$

Substitute these into the radical:


$$\sqrt{\frac{2 \sin^2 \frac{\theta}{2}}{2 \cos^2 \frac{\theta}{2}}} = \sqrt{\tan^2 \frac{\theta}{2}} = \tan \frac{\theta}{2}$$


(Assuming $-\pi < \theta < \pi$ to keep the term positive)

Step 2: Simplify the function $y$
Substitute back into the original expression:


$$y = \sin\left(2 \tan^{-1}\left(\tan \frac{\theta}{2}\right)\right)$$

$$y = \sin\left(2 \cdot \frac{\theta}{2}\right) = \sin \theta$$

Step 3: Convert back to the variable $x$
We know that $\cos \theta = x$. Using the identity $\sin^2 \theta + \cos^2 \theta = 1$:


$$\sin \theta = \sqrt{1 - \cos^2 \theta} = \sqrt{1 - x^2}$$


Thus:


$$y = \sqrt{1 - x^2}$$

Step 4: Differentiate with respect to $x$


$$\frac{dy}{dx} = \frac{d}{dx}\left(\sqrt{1-x^2}\right)$$

$$\frac{dy}{dx} = \frac{1}{2\sqrt{1-x^2}} \cdot (-2x) = -\frac{x}{\sqrt{1-x^2}}$$

Answer

$$\boxed{\frac{dy}{dx} = -\frac{x}{\sqrt{1-x^2}}}$$

Classification

topic: Differentiation
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Trigonometric Substitution
  - Half-Angle Identities
  - Chain Rule


CSE 25 • CT • ECE • Question 3(ii)

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(ii)


Question

Find $\dfrac{dy}{dx}$ of $y = (\tan x)^{\sec x} + (\cot x)^{\csc x}$.

Solution

Step 1: Use logarithmic differentiation on each term separately
Let $y = u + v$, where:


$$u = (\tan x)^{\sec x}$$

$$v = (\cot x)^{\csc x}$$


Then:


$$\frac{dy}{dx} = \frac{du}{dx} + \frac{dv}{dx}$$

Step 2: Find $\frac{du}{dx}$
Take the natural logarithm of $u$:


$$\ln u = \sec x \ln(\tan x)$$


Differentiate with respect to $x$ using the product rule:


$$\frac{1}{u}\frac{du}{dx} = \frac{d}{dx}(\sec x) \cdot \ln(\tan x) + \sec x \cdot \frac{d}{dx}(\ln(\tan x))$$

$$\frac{1}{u}\frac{du}{dx} = \sec x \tan x \ln(\tan x) + \sec x \cdot \frac{1}{\tan x} \cdot \sec^2 x$$


Since $\sec x \cdot \frac{1}{\tan x} \cdot \sec^2 x = \frac{1}{\cos x} \cdot \frac{\cos x}{\sin x} \cdot \frac{1}{\cos^2 x} = \csc x \sec^2 x$:


$$\frac{1}{u}\frac{du}{dx} = \sec x \tan x \ln(\tan x) + \csc x \sec^2 x$$

$$\frac{du}{dx} = (\tan x)^{\sec x} \left[\sec x \tan x \ln(\tan x) + \csc x \sec^2 x\right]$$

Step 3: Find $\frac{dv}{dx}$
Take the natural logarithm of $v$:


$$\ln v = \csc x \ln(\cot x)$$


Differentiate with respect to $x$ using the product rule:


$$\frac{1}{v}\frac{dv}{dx} = \frac{d}{dx}(\csc x) \cdot \ln(\cot x) + \csc x \cdot \frac{d}{dx}(\ln(\cot x))$$

$$\frac{1}{v}\frac{dv}{dx} = -\csc x \cot x \ln(\cot x) + \csc x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x)$$


Since $\csc x \cdot \frac{1}{\cot x} \cdot (-\csc^2 x) = \frac{1}{\sin x} \cdot \frac{\sin x}{\cos x} \cdot \left(-\frac{1}{\sin^2 x}\right) = -\sec x \csc^2 x$:


$$\frac{1}{v}\frac{dv}{dx} = -\csc x \cot x \ln(\cot x) - \sec x \csc^2 x$$

$$\frac{dv}{dx} = -(\cot x)^{\csc x} \left[\csc x \cot x \ln(\cot x) + \sec x \csc^2 x\right]$$

Step 4: Combine the results


$$\frac{dy}{dx} = (\tan x)^{\sec x} \left[\sec x \tan x \ln(\tan x) + \csc x \sec^2 x\right] - (\cot x)^{\csc x} \left[\csc x \cot x \ln(\cot x) + \sec x \csc^2 x\right]$$

Answer

$$\boxed{\frac{dy}{dx} = (\tan x)^{\sec x} \left[\sec x \tan x \ln(\tan x) + \csc x \sec^2 x\right] - (\cot x)^{\csc x} \left[\csc x \cot x \ln(\cot x) + \sec x \csc^2 x\right]}$$

Classification

topic: Differentiation
difficulty: Hard
question_type: Repeated PYQ Pattern
techniques_used:
  - Logarithmic Differentiation
  - Product Rule
  - Chain Rule


CSE 25 • CT • ECE • Question 3(iii)

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 3(iii)


Question

Find $\dfrac{dy}{dx}$ of $x = y^{y^{y^{\dots}}}$.

Solution

Step 1: Simplify the infinite tower exponent
The given equation is:


$$x = y^{y^{y^{\dots}}}$$


Since the tower is infinite, the exponent of the base $y$ is equivalent to the tower itself, which is equal to $x$:


$$x = y^x$$

Step 2: Differentiate implicitly using logarithms
Taking the natural logarithm of both sides:


$$\ln x = \ln(y^x) = x \ln y$$


Differentiate both sides with respect to $x$:


$$\frac{1}{x} = \frac{d}{dx}(x \ln y)$$


Apply the product rule to the right-hand side:


$$\frac{1}{x} = (1)\ln y + x \cdot \frac{1}{y} \frac{dy}{dx}$$

$$\frac{1}{x} - \ln y = \frac{x}{y} \frac{dy}{dx}$$

Step 3: Solve for $\frac{dy}{dx}$


$$\frac{1 - x \ln y}{x} = \frac{x}{y} \frac{dy}{dx}$$

$$\frac{dy}{dx} = \frac{y(1 - x \ln y)}{x^2}$$

Answer

$$\boxed{\frac{dy}{dx} = \frac{y(1 - x \ln y)}{x^2}}$$

Classification

topic: Differentiation
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Infinite Power Series Substitution
  - Logarithmic Differentiation
  - Implicit Differentiation


CSE 25 • CT • ECE • Question 4

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 4


Question

State Leibnitz's theorem. If $y = \cosh\left(m \cosh^{-1} x\right)$, then using Leibnitz's theorem show that


$$(x^2 - 1)y_{n+2} + (2n+1)xy_{n+1} + (n^2 - m^2)y_n = 0$$

Solution

Step 1: State Leibnitz's Theorem
If $u(x)$ and $v(x)$ are two functions of $x$ possessing derivatives of the $n$-th order, then the $n$-th derivative of their product $uv$ is given by:


$$(uv)_n = u_n v + \binom{n}{1} u_{n-1} v_1 + \binom{n}{2} u_{n-2} v_2 + \dots + \binom{n}{r} u_{n-r} v_r + \dots + u v_n$$

Step 2: Establish the second-order differential equation
Given:


$$y = \cosh(m \cosh^{-1} x) \tag{1}$$

Differentiate both sides with respect to $x$:
Recall that $\frac{d}{dx}(\cosh u) = \sinh u \frac{du}{dx}$ and $\frac{d}{dx}(\cosh^{-1} x) = \frac{1}{\sqrt{x^2 - 1}}$.


$$y_1 = \sinh(m \cosh^{-1} x) \cdot \frac{m}{\sqrt{x^2 - 1}}$$


Multiply both sides by $\sqrt{x^2 - 1}$:


$$\sqrt{x^2 - 1} y_1 = m \sinh(m \cosh^{-1} x)$$


Squaring both sides to eliminate the square root:


$$(x^2 - 1) y_1^2 = m^2 \sinh^2(m \cosh^{-1} x)$$


Recall the hyperbolic identity $\cosh^2 \theta - \sinh^2 \theta = 1 \implies \sinh^2 \theta = \cosh^2 \theta - 1$:


$$(x^2 - 1) y_1^2 = m^2 \left[\cosh^2(m \cosh^{-1} x) - 1\right]$$


Substitute $y$ from equation (1):


$$(x^2 - 1) y_1^2 = m^2 (y^2 - 1) \tag{2}$$

Differentiate equation (2) with respect to $x$ using the product rule:


$$\frac{d}{dx}(x^2 - 1) \cdot y_1^2 + (x^2 - 1) \cdot 2y_1 y_2 = m^2 (2y y_1)$$

$$2x y_1^2 + 2(x^2 - 1)y_1 y_2 = 2m^2 y y_1$$


Divide both sides by $2y_1$ (assuming $y_1 \neq 0$):


$$(x^2 - 1)y_2 + x y_1 - m^2 y = 0 \tag{3}$$

Step 3: Differentiate equation (3) $n$ times using Leibnitz's Theorem
We will compute the $n$-th derivative of each term in:


$$\frac{d^n}{dx^n}\left[(x^2 - 1)y_2\right] + \frac{d^n}{dx^n}\left[x y_1\right] - m^2 y_n = 0$$

Term 1: $\frac{d^n}{dx^n}\left[(x^2 - 1)y_2\right]$
Let $u = y_2$ and $v = x^2 - 1$.
Then $v_1 = 2x$, $v_2 = 2$, and $v_r = 0$ for $r \ge 3$.


$$(u v)_n = y_{n+2}(x^2 - 1) + n y_{n+1}(2x) + \frac{n(n-1)}{2} y_n (2)$$

$$(u v)_n = (x^2 - 1)y_{n+2} + 2nxy_{n+1} + n(n-1)y_n$$

Term 2: $\frac{d^n}{dx^n}\left[x y_1\right]$
Let $u = y_1$ and $v = x$.
Then $v_1 = 1$, and $v_r = 0$ for $r \ge 2$.


$$(u v)_n = y_{n+1}(x) + n y_n (1) = x y_{n+1} + n y_n$$

Substitute these expressions back into the equation:


$$\left[(x^2 - 1)y_{n+2} + 2nxy_{n+1} + n(n-1)y_n\right] + \left[x y_{n+1} + n y_n\right] - m^2 y_n = 0$$


Group the terms by $y_{n+2}$, $y_{n+1}$, and $y_n$:


$$(x^2 - 1)y_{n+2} + (2n + 1)x y_{n+1} + [n(n-1) + n - m^2] y_n = 0$$

$$(x^2 - 1)y_{n+2} + (2n + 1)x y_{n+1} + (n^2 - m^2) y_n = 0$$

This is the exact relation required to be shown.

Answer

$$\text{Leibnitz's Theorem: } (uv)_n = \sum_{r=0}^{n} \binom{n}{r} u_{n-r} v_r$$

$$\text{Proven Relation: } (x^2 - 1)y_{n+2} + (2n+1)xy_{n+1} + (n^2 - m^2)y_n = 0$$

Classification

topic: Applications of Derivatives
difficulty: Hard
question_type: Repeated PYQ Pattern
techniques_used:
  - Leibnitz's Theorem
  - Hyperbolic Functions Successive Differentiation


CSE 25 • CT • ECE • Question 5

discipline: ECE
year: CSE-25 (2025-II)
exam_type: CT
section: UNKNOWN
ct_number: UNKNOWN
question_number: 5


Question

Find nth derivatives of $y = e^{ax}\cos(bx+c)$.

Solution

Step 1: Calculate the first few derivatives to find a pattern
Given:


$$y = e^{ax}\cos(bx+c)$$

Differentiating once with respect to $x$:


$$y_1 = a e^{ax} \cos(bx+c) - b e^{ax} \sin(bx+c)$$

$$y_1 = e^{ax} [a \cos(bx+c) - b \sin(bx+c)]$$

Step 2: Introduce polar coordinates to simplify the trigonometric terms
Let:


$$a = r \cos \phi \tag{1}$$

$$b = r \sin \phi \tag{2}$$

Thus,


$$r = \sqrt{a^2 + b^2} \quad \text{and} \quad \phi = \tan^{-1}\left(\frac{b}{a}\right)$$

Substitute these values back into $y_1$:


$$y_1 = e^{ax} [r \cos \phi \cos(bx+c) - r \sin \phi \sin(bx+c)]$$


Using the trigonometric identity $\cos A \cos B - \sin A \sin B = \cos(A+B)$:


$$y_1 = r e^{ax} \cos(bx+c+\phi)$$

Step 3: Generalize to the $n$-th derivative
Differentiating successively using the same polar transformations:


$$y_2 = r^2 e^{ax} \cos(bx+c+2\phi)$$


By mathematical induction, the $n$-th derivative is:


$$y_n = r^n e^{ax} \cos(bx+c+n\phi)$$

Substitute $r$ and $\phi$ back into the formula:


$$y_n = (a^2+b^2)^{n/2} e^{ax} \cos\left(bx+c+n\tan^{-1}\frac{b}{a}\right)$$

Answer

$$\boxed{y_n = (a^2+b^2)^{n/2} e^{ax} \cos\left(bx+c+n\tan^{-1}\frac{b}{a}\right)}$$

Classification

topic: Differentiation
difficulty: Medium
question_type: Repeated PYQ Pattern
techniques_used:
  - Successive Differentiation
  - Polar Coordinate Transformation
