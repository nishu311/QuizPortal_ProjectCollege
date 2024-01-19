import React from "react";
import Header from "../componants/Layout/Header";


const MlpPage = () => {
  return (
    <div className="relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat bg-slate-100">
    <Header activeHeading={1} />
    
<a href="#" class="block w-4/5 p-6 my-11 mx-8 bg-gray-300 border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">1. What Are the Different Types of Machine Learning?
</h5>

<p class="font-normal text-gray-700 dark:text-gray-400"> Supervised Learning
In supervised machine learning, a model makes predictions or decisions based on past or labeled data. Labeled data refers to sets of data that are given tags or labels, and thus made more meaningful.
<li>Unsupervised Learning
In unsupervised learning, we don't have labeled data. A model can identify patterns, anomalies, and relationships in the input data.

</li>
<li>
Reinforcement Learning
Using reinforcement learning, the model can learn based on the rewards it received for its previous action.</li></p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">2. What is Overfitting, and How Can You Avoid It? </h5>

<p class="font-normal text-gray-700 dark:text-gray-400"> The Overfitting is a situation that occurs when a model learns the training set too well, taking up random fluctuations in the training data as concepts. These impact the model’s ability to generalize and don’t apply to new data. 

When a model is given the training data, it shows 100 percent accuracy—technically a slight loss. But, when we use the test data, there may be an error and low efficiency. This condition is known as overfitting.

There are multiple ways of avoiding overfitting, such as:
<li>Regularization. It involves a cost term for the features involved with the objective function
</li>
<li>If some model parameters are likely to cause overfitting, techniques for regularization like LASSO can be used that penalize these parameters</li>

</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">How Do You Handle Missing or Corrupted Data in a Dataset?</h5>
<li> One of the easiest ways to handle missing or corrupted data is to drop those rows or columns or replace them entirely with some other value.

There are two useful methods in Pandas:

</li>
<li> IsNull() and dropna() will help to find the columns/rows with missing data and drop them

</li>
<li> Fillna() will replace the wrong values with a placeholder value

</li>
<li> A blocked process can move to ready state.

</li>

    <h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">How Can You Choose a Classifier Based on a Training Set Data Size?</h5>
    
<p class="font-normal text-gray-700 dark:text-gray-400">When the training set is small, a model that has a right bias and low variance seems to work better because they are less likely to overfit. 

For example, Naive Bayes works best when the training set is large. Models with low bias and high variance tend to perform better as they work fine with complex relationships.
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">  Explain the Confusion Matrix with Respect to Machine Learning Algorithms.

</h5>
    
<p class="font-normal text-gray-700 dark:text-gray-400"> A confusion matrix (or error matrix) is a specific table that is used to measure the performance of an algorithm. It is mostly used in supervised learning; in unsupervised learning, it’s called the matching matrix.

The confusion matrix has two parameters:

Actual
Predicted 
It also has identical sets of features in both of these dimensions.

</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">What Is a False Positive and False Negative and How Are They Significant?</h5>
   
<p class="font-normal text-gray-700 dark:text-gray-400">False positives are those cases that wrongly get classified as True but are False. 

False negatives are those cases that wrongly get classified as False but are True.

In the term ‘False Positive,’ the word ‘Positive’ refers to the ‘Yes’ row of the predicted value in the confusion matrix. The complete term indicates that the system has predicted it as a positive, but the actual value is negative. 


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">What is Deep Learning?
</h5>
    
<p class="font-normal text-gray-700 dark:text-gray-400">The Deep learning is a subset of machine learning that involves systems that think and learn like humans using artificial neural networks. The term ‘deep’ comes from the fact that you can have several layers of neural networks. 

One of the primary differences between machine learning and deep learning is that feature engineering is done manually in machine learning. In the case of deep learning, the model consisting of neural networks will automatically determine which features to use (and which not to use). 


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">What Are the Applications of Supervised Machine Learning in Modern Businesses?
</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> Applications of supervised machine learning include:

Email Spam Detection
Here we train the model using historical data that consists of emails categorized as spam or not spam. This labeled information is fed as input to the model.
Healthcare Diagnosis
By providing images regarding a disease, a model can be trained to detect if a person is suffering from the disease or not.
Sentiment Analysis
This refers to the process of using algorithms to mine documents and determine whether they’re positive, neutral, or negative in sentiment. 
Fraud Detection
By training the model to identify suspicious patterns, we can detect instances of possible fraud.


</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white">What is Semi-supervised Machine Learning?
</h5>
    
<p class="font-normal text-gray-700 dark:text-gray-400">Supervised learning uses data that is completely labeled, whereas unsupervised learning uses no training data.

In the case of semi-supervised learning, the training data contains a small amount of labeled data and a large amount of unlabeled data.
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> What Are Unsupervised Machine Learning Techniques?</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> There are two techniques used in unsupervised learning: clustering and association.

Clustering
Clustering problems involve data to be divided into subsets. These subsets, also called clusters, contain data that are similar to each other. Different clusters reveal different details about the objects, unlike classification or regression.
<li>Association
In an association problem, we identify patterns of associations between different variables or items.

For example, an e-commerce website can suggest other items for you to buy, based on the prior purchases that you have made, spending habits, items in your wishlist, other customers’ purchase habits, and so on.</li>

</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> What is the Difference Between Supervised and Unsupervised Machine Learning?</h5>

<p class="font-normal text-gray-700 dark:text-gray-400"> Supervised learning - This model learns from the labeled data and makes a future prediction as output 
Unsupervised learning - This model uses unlabeled input data and allows the algorithm to act on that information without guidance.
</p>
<h5 class="mb-2 text-40px font-bold tracking-tight text-gray-900 dark:text-white"> What Is ‘naive’ in the Naive Bayes Classifier?
</h5>
    
<p class="font-normal text-gray-700 dark:text-gray-400"> The classifier is called ‘naive’ because it makes assumptions that may or may not turn out to be correct. 

The algorithm assumes that the presence of one feature of a class is not related to the presence of any other feature (absolute independence of features), given the class variable.

For instance, a fruit may be considered to be a cherry if it is red in color and round in shape, regardless of other features. This assumption may or may not be right (as an apple also matches the description).
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

export default MlpPage;
