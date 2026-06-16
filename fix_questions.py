
import json
import re
import sys

# Read current questions from the last good state
try:
    with open("/tmp/current_questions.js", "r") as f:
        content = f.read()
except Exception as e:
    print(f"Error reading current questions: {e}", file=sys.stderr)
    sys.exit(1)

# Extract the array part
match = re.search(r"const questions = (\[.*\]);", content, re.DOTALL)
if not match:
    match = re.search(r"const questions = (\[.*\])", content, re.DOTALL)

if not match:
    print("Could not find questions array in JS file", file=sys.stderr)
    sys.exit(1)

questions_json = match.group(1)
questions_json = re.sub(r",\s*\]", "]", questions_json)

try:
    questions = json.loads(questions_json)
except Exception as e:
    print(f"Error parsing existing JSON: {e}", file=sys.stderr)
    sys.exit(1)

# New questions
new_questions = [
    {
        "id": "cse23-ct2-secb-q1",
        "discipline": "CSE",
        "batch": 23,
        "year": 2023,
        "examType": "CT",
        "examNumber": 2,
        "section": "B",
        "questionNumber": "1",
        "topics": ["Definite Integration"],
        "difficulty": "Medium",
        "length": "Long",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "State and derive the relation between the beta and gamma functions.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: State the relationship</p>
              <p>The relation between the Beta function $B(m, n)$ and the Gamma function $\Gamma(x)$ for $m > 0$ and $n > 0$ is given by:</p>
              <div class="overflow-x-auto">$$B(m, n) = \frac{\Gamma(m) \Gamma(n)}{\Gamma(m+n)}$$</div>
              <p class="font-semibold text-slate-900">Step 2: Express the Gamma functions in exponential form</p>
              <p>By definition, the Gamma function is:</p>
              <div class="overflow-x-auto">$$\Gamma(n) = \int_0^\infty e^{-t} t^{n-1} \, dt$$</div>
              <p>Let $t = x^2$. Then $dt = 2x \, dx$. The limits of integration remain $0$ to $\infty$. Substituting these:</p>
              <div class="overflow-x-auto">$$\Gamma(n) = \int_0^\infty e^{-x^2} (x^2)^{n-1} (2x \, dx) = 2 \int_0^\infty e^{-x^2} x^{2n-1} \, dx$$</div>
              <p>Similarly, we can write $\Gamma(m)$ using a different dummy variable $y$:</p>
              <div class="overflow-x-auto">$$\Gamma(m) = 2 \int_0^\infty e^{-y^2} y^{2m-1} \, dy$$</div>
              <p class="font-semibold text-slate-900">Step 3: Multiply the two Gamma functions</p>
              <p>Multiplying the two expressions together:</p>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = \left( 2 \int_0^\infty e^{-y^2} y^{2m-1} \, dy \right) \left( 2 \int_0^\infty e^{-x^2} x^{2n-1} \, dx \right)$$</div>
              <p>Combining this into a double integral over the first quadrant of the $xy$-plane ($x \ge 0, y \ge 0$):</p>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = 4 \int_0^\infty \int_0^\infty e^{-(x^2+y^2)} x^{2n-1} y^{2m-1} \, dx \, dy$$</div>
              <p class="font-semibold text-slate-900">Step 4: Transform to polar coordinates</p>
              <p>Let $x = r \cos \theta$ and $y = r \sin \theta$. The differential area element is $dx \, dy = r \, dr \, d\theta$. The boundary of the first quadrant corresponds to $r$ running from $0$ to $\infty$ and $\theta$ running from $0$ to $\frac{\pi}{2}$. Substituting these transformations:</p>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = 4 \int_0^{\pi/2} \int_0^\infty e^{-r^2} (r \cos \theta)^{2n-1} (r \sin \theta)^{2m-1} r \, dr \, d\theta$$</div>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = 4 \int_0^{\pi/2} \int_0^\infty e^{-r^2} r^{2(m+n)-1} \sin^{2m-1} \theta \cos^{2n-1} \theta \, dr \, d\theta$$</div>
              <p class="font-semibold text-slate-900">Step 5: Separate the integrals</p>
              <p>Since the limits of integration are independent constants, we can factor the integrals:</p>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = 2 \left( \int_0^\infty e^{-r^2} r^{2(m+n)-1} \, dr \right) \cdot 2 \left( \int_0^{\pi/2} \sin^{2m-1} \theta \cos^{2n-1} \theta \, d\theta \right)$$</div>
              <p class="font-semibold text-slate-900">Step 6: Identify the integral components</p>
              <p>Using the definition established in Step 2:</p>
              <div class="overflow-x-auto">$$2 \int_0^\infty e^{-r^2} r^{2(m+n)-1} \, dr = \Gamma(m+n)$$</div>
              <p>Using the trigonometric form of the Beta function:</p>
              <div class="overflow-x-auto">$$2 \int_0^{\pi/2} \sin^{2m-1} \theta \cos^{2n-1} \theta \, d\theta = B(m, n)$$</div>
              <p class="font-semibold text-slate-900">Step 7: Solve for the Beta-Gamma relation</p>
              <p>Substitute these two identities back into the equation:</p>
              <div class="overflow-x-auto">$$\Gamma(m) \Gamma(n) = \Gamma(m+n) B(m, n)$$</div>
              <p>Dividing both sides by $\Gamma(m+n)$:</p>
              <div class="overflow-x-auto">$$B(m, n) = \frac{\Gamma(m) \Gamma(n)}{\Gamma(m+n)}$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$B(m, n) = \frac{\Gamma(m) \Gamma(n)}{\Gamma(m+n)}$$</div>"""
    },
    {
        "id": "cse22-final-secb-q5i",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "5(i)",
        "topics": ["Indefinite Integration"],
        "difficulty": "Easy",
        "length": "Short",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Integrate the following: $$\int \frac{dx}{1+\cos x}$$",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Simplify the integrand using trigonometric half-angle identities</p>
              <p>Recall that $1 + \cos x = 2 \cos^2\left(\frac{x}{2}\right)$. Substituting this into the integral:</p>
              <div class="overflow-x-auto">$$\int \frac{dx}{1+\cos x} = \int \frac{dx}{2 \cos^2\left(\frac{x}{2}\right)}$$</div>
              <p class="font-semibold text-slate-900">Step 2: Rewrite in terms of secant and integrate</p>
              <div class="overflow-x-auto">$$\frac{1}{2} \int \sec^2\left(\frac{x}{2}\right) \, dx$$</div>
              <p>Using the standard integration formula $\int \sec^2(u) \, du = \tan(u) + C$:</p>
              <div class="overflow-x-auto">$$\frac{1}{2} \cdot \left( \frac{\tan\left(\frac{x}{2}\right)}{\frac{1}{2}} \right) + C = \tan\left(\frac{x}{2}\right) + C$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\tan\left(\frac{x}{2}\right) + C$$</div>"""
    },
    {
        "id": "cse22-final-secb-q5ii",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "5(ii)",
        "topics": ["Indefinite Integration"],
        "difficulty": "Easy",
        "length": "Short",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Integrate the following: $$\int \frac{e^{2x}}{e^x+1} \, dx$$",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Apply substitution</p>
              <p>Let $u = e^x$. Then $du = e^x \, dx$. We can rewrite the numerator as $e^{2x} = e^x \cdot e^x$. The integral becomes:</p>
              <div class="overflow-x-auto">$$\int \frac{e^x}{e^x+1} (e^x \, dx) = \int \frac{u}{u+1} \, du$$</div>
              <p class="font-semibold text-slate-900">Step 2: Perform algebraic manipulation on the integrand</p>
              <div class="overflow-x-auto">$$\int \frac{u+1-1}{u+1} \, du = \int \left( 1 - \frac{1}{u+1} \right) du$$</div>
              <p class="font-semibold text-slate-900">Step 3: Integrate and substitute back $u = e^x$</p>
              <div class="overflow-x-auto">$$u - \ln|u+1| + C = e^x - \ln(e^x+1) + C$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$e^x - \ln(e^x+1) + C$$</div>"""
    },
    {
        "id": "cse22-final-secb-q5iii",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "5(iii)",
        "topics": ["Indefinite Integration"],
        "difficulty": "Medium",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Integrate the following: $$\int e^{2x} \sin 4x \, dx$$",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Use the standard formula for integrals of the type $\int e^{ax} \sin bx \, dx$</p>
              <p>Recall the formula:</p>
              <div class="overflow-x-auto">$$\int e^{ax} \sin bx \, dx = \frac{e^{ax}}{a^2+b^2} (a \sin bx - b \cos bx) + C$$</div>
              <p class="font-semibold text-slate-900">Step 2: Substitute the parameters $a=2$ and $b=4$ into the formula</p>
              <div class="overflow-x-auto">$$\int e^{2x} \sin 4x \, dx = \frac{e^{2x}}{2^2+4^2} (2 \sin 4x - 4 \cos 4x) + C = \frac{e^{2x}}{20} (2 \sin 4x - 4 \cos 4x) + C$$</div>
              <p class="font-semibold text-slate-900">Step 3: Simplify the expression</p>
              <div class="overflow-x-auto">$$= \frac{e^{2x}}{10} (\sin 4x - 2 \cos 4x) + C$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\frac{e^{2x}}{10} (\sin 4x - 2 \cos 4x) + C$$</div>"""
    },
    {
        "id": "cse22-final-secb-q5iv",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "5(iv)",
        "topics": ["Indefinite Integration"],
        "difficulty": "Medium",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Integrate the following: $$\int \frac{x \, dx}{x^2-12x+35}$$",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Factor the denominator</p>
              <p>The quadratic expression $x^2-12x+35$ can be factored as: $x^2-12x+35 = (x-5)(x-7)$</p>
              <p class="font-semibold text-slate-900">Step 2: Apply partial fraction decomposition</p>
              <div class="overflow-x-auto">$$\frac{x}{(x-5)(x-7)} = \frac{A}{x-5} + \frac{B}{x-7}$$</div>
              <p>Multiply both sides by $(x-5)(x-7)$: $x = A(x-7) + B(x-5)$</p>
              <p class="font-semibold text-slate-900">Step 3: Solve for constants $A$ and $B$</p>
              <p>For $x = 5$: $5 = A(5-7) \implies 5 = -2A \implies A = -5/2$. For $x = 7$: $7 = B(7-5) \implies 7 = 2B \implies B = 7/2$.</p>
              <p class="font-semibold text-slate-900">Step 4: Integrate the decomposed terms</p>
              <div class="overflow-x-auto">$$\int \frac{x \, dx}{x^2-12x+35} = -\frac{5}{2} \int \frac{dx}{x-5} + \frac{7}{2} \int \frac{dx}{x-7} = -\frac{5}{2} \ln|x-5| + \frac{7}{2} \ln|x-7| + C$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\frac{7}{2} \ln|x-7| - \frac{5}{2} \ln|x-5| + C$$</div>"""
    },
    {
        "id": "cse22-final-secb-q6a",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "6(a)",
        "topics": ["Definite Integration"],
        "difficulty": "Medium",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "Define definite integral. Find $\int_1^2 x \, dx$ as the limit of sum.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: State the definition of a definite integral</p>
              <p>Let $f(x)$ be a continuous function defined on a closed interval $[a, b]$. The definite integral of $f(x)$ from $a$ to $b$ is defined as the limit of Riemann sums as the width of the subintervals approaches zero:</p>
              <div class="overflow-x-auto">$$\int_a^b f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i) \Delta x$$</div>
              <p>where $\Delta x = \frac{b-a}{n}$ and $x_i = a + i\Delta x$.</p>
              <p class="font-semibold text-slate-900">Step 2: Set up the limit of sum for $\int_1^2 x \, dx$</p>
              <p>Here, $f(x) = x$, $a = 1$, and $b = 2$. $\Delta x = \frac{2-1}{n} = \frac{1}{n}$, $x_i = 1 + i\Delta x = 1 + \frac{i}{n}$.</p>
              <p class="font-semibold text-slate-900">Step 3: Substitute the variables into the summation formula</p>
              <div class="overflow-x-auto">$$\int_1^2 x \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} \left(1 + \frac{i}{n}\right) \frac{1}{n} = \lim_{n \to \infty} \frac{1}{n} \left[ \sum_{i=1}^{n} 1 + \frac{1}{n} \sum_{i=1}^{n} i \right]$$</div>
              <p class="font-semibold text-slate-900">Step 4: Evaluate the summations</p>
              <p>Recall that $\sum_{i=1}^{n} 1 = n$ and $\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$.</p>
              <div class="overflow-x-auto">$$\int_1^2 x \, dx = \lim_{n \to \infty} \frac{1}{n} \left[ n + \frac{n(n+1)}{2n} \right] = \lim_{n \to \infty} \left[ 1 + \frac{n+1}{2n} \right] = 1 + 1/2 = 3/2$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$3/2$$</div>"""
    },
    {
        "id": "cse22-final-secb-q6b",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "6(b)",
        "topics": ["Definite Integration"],
        "difficulty": "Hard",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Evaluate $\lim_{n \to \infty} \left[\frac{1}{n+m} + \frac{1}{n+2m} + \frac{1}{n+3m} + \dots + \frac{1}{n+nm}\right]$.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Express the sequence as a summation</p>
              <p>The given expression can be written as: $S_n = \sum_{r=1}^{n} \frac{1}{n+rm}$</p>
              <p class="font-semibold text-slate-900">Step 2: Convert the summation into a Riemann sum form</p>
              <p>Factor out $n$ from the denominator:</p>
              <div class="overflow-x-auto">$$S_n = \sum_{r=1}^{n} \frac{1}{n(1 + m\frac{r}{n})} = \frac{1}{n} \sum_{r=1}^{n} \frac{1}{1 + m(\frac{r}{n})}$$</div>
              <p class="font-semibold text-slate-900">Step 3: Convert the limit of the Riemann sum into a definite integral</p>
              <p>As $n \to \infty$, let $\frac{r}{n} \to x$ and $\frac{1}{n} \to dx$. The limits of integration run from $x = 0$ to $x = 1$.</p>
              <div class="overflow-x-auto">$$\lim_{n \to \infty} S_n = \int_0^1 \frac{1}{1+mx} \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 4: Integrate and evaluate the expression</p>
              <div class="overflow-x-auto">$$\int_0^1 \frac{1}{1+mx} \, dx = \left[ \frac{\ln(1+mx)}{m} \right]_0^1 = \frac{\ln(1+m)}{m} - \frac{\ln(1)}{m} = \frac{\ln(1+m)}{m}$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\frac{\ln(1+m)}{m}$$</div>"""
    },
    {
        "id": "cse22-final-secb-q7a",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "7(a)",
        "topics": ["Definite Integration"],
        "difficulty": "Easy",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "What are beta function and gamma function? Write the relation between them.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Define the Beta Function</p>
              <p>The Beta Function, denoted by $B(m, n)$, is defined for $m > 0, n > 0$ as:</p>
              <div class="overflow-x-auto">$$B(m, n) = \int_0^1 x^{m-1} (1-x)^{n-1} \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 2: Define the Gamma Function</p>
              <p>The Gamma Function, denoted by $\Gamma(n)$, is defined for $n > 0$ as:</p>
              <div class="overflow-x-auto">$$\Gamma(n) = \int_0^\infty e^{-x} x^{n-1} \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 3: Write the relationship between them</p>
              <p>The relationship connecting the Beta and Gamma functions is given by:</p>
              <div class="overflow-x-auto">$$B(m, n) = \frac{\Gamma(m) \Gamma(n)}{\Gamma(m+n)}$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$B(m, n) = \frac{\Gamma(m) \Gamma(n)}{\Gamma(m+n)}$$</div>"""
    },
    {
        "id": "cse22-final-secb-q7b",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "7(b)",
        "topics": ["Definite Integration"],
        "difficulty": "Hard",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": r"Evaluate $\int_0^1 \frac{dx}{(1-x^6)^{1/6}}$ by Beta-Gamma function.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Set up substitution to match the Beta function form</p>
              <p>Let $x^6 = y \implies x = y^{1/6}$, $dx = \frac{1}{6} y^{-5/6} \, dy$.</p>
              <p class="font-semibold text-slate-900">Step 2: Express the integral in terms of $y$</p>
              <div class="overflow-x-auto">$$\int_0^1 \frac{dx}{(1-x^6)^{1/6}} = \int_0^1 \frac{\frac{1}{6} y^{-5/6}}{(1-y)^{1/6}} \, dy = \frac{1}{6} \int_0^1 y^{-5/6} (1-y)^{-1/6} \, dy$$</div>
              <p class="font-semibold text-slate-900">Step 3: Match with the standard Beta function definition</p>
              <p>Compare with $B(p, q) = \int_0^1 y^{p-1} (1-y)^{q-1} \, dy$: $p-1 = -5/6 \implies p=1/6$, $q-1 = -1/6 \implies q=5/6$. The integral is $\frac{1}{6} B(1/6, 5/6) = \frac{1}{6} \frac{\Gamma(1/6)\Gamma(5/6)}{\Gamma(1)}$.</p>
              <p class="font-semibold text-slate-900">Step 4: Use Euler's reflection formula to evaluate the Gamma product</p>
              <p>$\Gamma(1/6)\Gamma(5/6) = \frac{\pi}{\sin(\pi/6)} = 2\pi$. Since $\Gamma(1) = 1$, the integral evaluates to $\frac{1}{6} \cdot 2\pi = \pi/3$.</p>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\pi/3$$</div>"""
    },
    {
        "id": "cse22-final-secb-q7c",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "7(c)",
        "topics": ["Definite Integration"],
        "difficulty": "Medium",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "Find the area of the region bounded above by $y = x + b$, bounded below by $y = x^2$, and bounded on the sides by the lines $x = 0$ and $x = 2$.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Set up the definite integral for the area</p>
              <div class="overflow-x-auto">$$A = \int_a^b [f(x) - g(x)] \, dx = \int_0^2 [(x + b) - x^2] \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 2: Integrate with respect to $x$</p>
              <div class="overflow-x-auto">$$A = \left[ \frac{x^2}{2} + bx - \frac{x^3}{3} \right]_0^2$$</div>
              <p class="font-semibold text-slate-900">Step 3: Evaluate the expression at the boundaries</p>
              <p>$A = (2 + 2b - 8/3) - 0 = 2b - 2/3$.</p>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$2b - 2/3$$</div>"""
    },
    {
        "id": "cse22-final-secb-q8a",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "8(a)",
        "topics": ["Definite Integration"],
        "difficulty": "Easy",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "Derive the formula for the volume of a sphere of radius $r$.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: Set up the geometric model</p>
              <p>Consider a circle $x^2 + y^2 = r^2$. Rotating the upper semi-circle $y = \sqrt{r^2 - x^2}$ about the x-axis generates a sphere.</p>
              <p class="font-semibold text-slate-900">Step 2: Formulate the volume using the disc method</p>
              <div class="overflow-x-auto">$$V = \int_{-r}^{r} \pi y^2 \, dx = \pi \int_{-r}^{r} (r^2 - x^2) \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 3: Use symmetry and integrate</p>
              <div class="overflow-x-auto">$$V = 2\pi \int_0^r (r^2 - x^2) \, dx = 2\pi \left[ r^2 x - \frac{x^3}{3} \right]_0^r = 2\pi (r^3 - r^3/3) = 4/3 \pi r^3$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$4/3 \pi r^3$$</div>"""
    },
    {
        "id": "cse22-final-secb-q8b",
        "discipline": "CSE",
        "batch": 22,
        "year": 2022,
        "examType": "Term Final",
        "examNumber": None,
        "section": "B",
        "questionNumber": "8(b)",
        "topics": ["Definite Integration"],
        "difficulty": "Medium",
        "length": "Medium",
        "frequency": 1,
        "appearances": [],
        "tags": [],
        "questionHtml": "Find the area of the surface that is generated by revolving the portion of the curve $y = x^3$ between $x = 0$ and $x = 1$ about the x-axis.",
        "solutionHtml": r"""<p class="font-semibold text-slate-900">Step 1: State the formula for the surface area of revolution</p>
              <div class="overflow-x-auto">$$S = 2\pi \int_a^b y \sqrt{1 + (dy/dx)^2} \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 2: Compute the derivative</p>
              <p>$dy/dx = 3x^2 \implies 1 + (dy/dx)^2 = 1 + 9x^4$</p>
              <p class="font-semibold text-slate-900">Step 3: Set up the integration</p>
              <div class="overflow-x-auto">$$S = 2\pi \int_0^1 x^3 \sqrt{1 + 9x^4} \, dx$$</div>
              <p class="font-semibold text-slate-900">Step 4: Solve the integral using u-substitution</p>
              <p>Let $u = 1 + 9x^4, du = 36x^3 dx$.</p>
              <div class="overflow-x-auto">$$S = 2\pi \int_1^{10} \sqrt{u} \frac{du}{36} = \frac{\pi}{18} [2/3 u^{3/2}]_1^{10} = \frac{\pi}{27} (10\sqrt{10} - 1)$$</div>""",
        "finalAnswerHtml": r"""<div class="overflow-x-auto">$$\frac{\pi}{27} (10\sqrt{10} - 1)$$</div>"""
    }
]

# Check for duplicates before extending
existing_ids = {q["id"] for q in questions}
for nq in new_questions:
    if nq["id"] not in existing_ids:
        questions.append(nq)

# Format as JS file
js_content = "const questions = " + json.dumps(questions, indent=2) + ";\n\nif (typeof module !== \"undefined\") module.exports = questions;"

with open("/tmp/new_questions.js", "w") as f:
    f.write(js_content)
