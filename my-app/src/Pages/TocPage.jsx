import React from "react";
import Header from "../componants/Layout/Header";


const TocPage = () => {
  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-slate-100">
    <Header activeHeading={1} />
    
<a href="#" class="block w-4/5 p-6 my-11 mx-8 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Consider the language L =  an ∣ n≥0 ∪ anbn ∣ n≥0  and the following statements.</h5>
<li>L is deterministic and context-free.</li>
<li>  L is context-free but not deterministic context-free.

</li>
<li>  L is not LL(k) for any k.

</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (c)Language  an ∣ n≥0  is regular and  anbn ∣ n≥0  is deterministic context free language (DCFL), so union of these will be DCFL, because union of DCFL with regular is always DCFL, but may be regular. Every DFCL is always CFL but converse may not true. So, statement (I) is true and (II) is false. Statement (III) is also true. Option (C) is true.</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Consider allocation of memory to a new process. Assume that none of the existing holes in the memory will exactly fit the process’s memory requirement. Hence, a new hole of smaller size will be created if allocation is made in any of the existing holes. Which one of the following statement is TRUE ?</h5>
<li> The hole created by first fit is always larger than the hole created by next fit.
</li>
<li> The hole created by worst fit is always larger than the hole created by first fit.</li>
<li> The hole created by best fit is never larger than the hole created by first fit.


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (C) Always correct, because best fit always has minimum hole.

</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Consider the following statements about process state transitions for a system using preemptive scheduling.</h5>
<li> A running process can move to ready state.

</li>
<li> A ready process can move to running state.
</li>
<li> A blocked process can move to running state.
</li>
<li> A blocked process can move to ready state.

</li>
<figcaption class="flex my-4 w-3/4 items-center justify-center ">
            <img class=" " src="https://media.geeksforgeeks.org/wp-content/uploads/20190604122001/states_modified.png" alt="profile picture"/>
        </figcaption>  
    <h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">3. Which one of the following languages over the alphabet 0,1 is described by the regular expression: (0+1)*0(0+1)*0(0+1)*? [GATE CSE 2019]</h5>
    <li>The set of all strings containing the substring 00.



</li>
<li>The set of all strings containing at most two 0’s.


</li>
<li>The set of all strings containing at least two 0’s.
</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Explanation: The regular expression has two 0′s surrounded by (0+1)* which means accepted strings must have at least 2 0′s.

The least possible string is ε 0 ε 0 ε = 00

The set of strings accepted is =  00, 000, 100, 0010, 0000, 00100, 1001001,…..

We can see from the set of accepted strings that all of the have at least two zeros which is the least possible string.
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> The C language is a:

</h5>
    <li>Regular language





</li>
<li>Context free language




</li>
<li>Language parsable fully by a Turing machine only


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Answer: (b) Context free language


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">If L refers to the language that is generated by S – OSO/00, then which of these is true?</h5>
    <li> L is not O but regular





</li>
<li>L is regular but not context-free




</li>
<li>L is not context-free


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Answer: (b) L is regular but not context-free


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Which of these problems given below is undecidable?</h5>
    <li>The Ambiguity problem for the CFGs





</li>
<li>The Membership problem for the CFGs




</li>
<li>The Equivalence problem for the FSAs


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Answer: (a) The Ambiguity problem for the CFGs


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">When L and L’ happen to be recursively enumerable, here L is:

</h5>
    <li>a. context-free





</li>
<li>regular




</li>
<li>recursive


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Answer: (c) recursive


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">If G is the CFG, r is the total number of rightmost derivations, l is the total number of leftmost derivations, as well as P refers to the total number of parse trees, then assume that r, l, and P are computed for some given particular string. Here, for a given ‘G’ CFG and given ‘w’ string, what is the relation between all three of these?</h5>
    <li>r ≤ P ≥ l





</li>
<li>r = P = l




</li>
<li>r ≥ P ≤ l


</li>
<p class="font-normal text-gray-700 dark:text-gray-400">(b)
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> The language that a Pushdown Automation accepts in which the stack stays limited to about 10 items is described best as:</h5>
    <li>Recursive



</li>
<li>Deterministic Context Free




</li>
<li>Regular


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (c)
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">If you consider a regular expression r, in which r = (11 + 111)* over Ʃ = 0, 1, then the number of states in minimal DFA and NFA respectively are:</h5>
<li>DFA – 4, NFA – 3



</li>
<li>b. DFA – 3, NFA – 3




</li>
<li>c. DFA – 3, NFA – 4


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (a)
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> If we consider an arbitrary NFA (non-deterministic finite automaton) with N states in total, the maximum number of states that are there in an equivalent DFA (minimised) is at least:</h5>
    <li>N!





</li>
<li> 2N




</li>
<li>2^N


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (C)
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">In the finite automaton with minimum state deterministic that accepts a given language L=w | w ε 0,1 *, the total number of 0s as well as 1s in w that would be divisible by 3 & 5, respectively would have:</h5>
    <li>9 states





</li>
<li>10 states




</li>
<li>15 states


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> (c) Explanation: The regular expression has two 0′s surrounded by (0+1)* which means accepted strings must have at least 2 0′s.

The least possible string is ε 0 ε 0 ε = 00

The set of strings accepted is =  00, 000, 100, 0010, 0000, 00100, 1001001,…..

We can see from the set of accepted strings that all of the have at least two zeros which is the least possible string.
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Consider the languages L1 = ∅ and L2 =a. Which one of the following represents L1L2* U L1*? [GATE CSE 2013]</h5>
    <li> ∈





</li>
<li>∅




</li>
<li> a*


</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Explanation: L1 L2* U L1* Result of L1 L2* is \\phi . \\phi  indicates an empty language. Concatenation of \\phi with any other language is \\phi . It works as 0 in multiplication. L1* = \\phi * which is \\epsilon . Union of \\phi and \\epsilon  is \\epsilon 
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">Language L1 is defined by the grammar: S1 − aS1b|∈
Language L2 is defined by the grammar: S2 − abS2|∈ [GATE CSE 2016]

Consider the following statements:
P: L1 is regular
Q: L2 is regular</h5>
    <li> Both P and Q are true
</li>
<li> P is true and Q is false
</li>
<li>(C) P is false and Q is true
</li>
<p class="font-normal text-gray-700 dark:text-gray-400"> Explanation: L1 has the property that no of a’s should be equal to no of b’s in a string, and all a’s should precede all b’s . Hence extra memory will be required to check this property of a string ( Finite Automaton can’t be built for this type of language). Hence this is not regular language. Therefore P is False.

L2 has the property that no of a’s should be equal to no of b’s, but order of a’s and b’s is different here, it is (ab)*, which will require no extra memory to be accepted.( Finite Automaton can be built for this language). Hence L2 is regular language. Therefore Q is True.
</p>

</a>

    </div>
  )
}

export default TocPage
