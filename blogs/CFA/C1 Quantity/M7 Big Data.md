# Big Data Projects

Big data refers not only to a large number of observations but also to data whose scale, speed, diversity, or quality makes conventional storage and analysis difficult. In investment management, its value comes from converting raw data into information that improves a decision—not from size alone.

## Sources and Forms of Data

Common sources include:

- **Financial markets:** prices, quotes, order books, volumes, and transaction records.
- **Companies:** financial statements, earnings calls, customer transactions, and operational records.
- **Governments:** economic releases, regulatory filings, court records, and public registries.
- **Individuals:** surveys, reviews, searches, and social-media activity, subject to consent and privacy rules.
- **Sensors and connected devices:** satellite imagery, geolocation, shipping signals, and Internet of Things data.

Traditional data are generally produced for established business or reporting purposes. **Alternative data** are generated outside those conventional channels—for example, satellite images of parking lots or anonymized payment activity—and repurposed for investment analysis.

| Form | Organization | Examples |
| --- | --- | --- |
| Structured | Fixed rows, columns, and data types | SQL tables, market-price panels, CSV files |
| Semi-structured | Tags or keys provide some organization | JSON, XML, web logs |
| Unstructured | No predefined tabular schema | Text, images, audio, and video |

### The Four Vs

- **Volume:** the amount of data.
- **Velocity:** the rate at which data arrive and must be processed.
- **Variety:** the diversity of sources, formats, and structures.
- **Veracity:** the accuracy, credibility, consistency, and reliability of the data.

Some frameworks add **value**, emphasizing that large data sets are useful only when they generate benefits exceeding acquisition, processing, compliance, and model-risk costs.

> [!IMPORTANT]
> More data do not automatically eliminate bias. A very large but unrepresentative sample can produce a precise estimate of the wrong quantity.

## The Big-Data Project Workflow

A sound project is iterative rather than a one-way modeling exercise.

1. **Conceptualize the problem.** Define the decision, target output, user, economic objective, constraints, and success measure.
2. **Collect and curate data.** Identify sources, obtain lawful access, document provenance, and label observations if supervised learning is planned.
3. **Prepare and wrangle data.** Detect errors, clean records, integrate sources, and transform values into a usable analytical table.
4. **Explore the data.** Summarize distributions and relationships, investigate anomalies, and assess whether the sample represents the intended population.
5. **Engineer and select features.** Create economically meaningful predictors and remove irrelevant or redundant inputs.
6. **Select, train, and validate a model.** Choose an appropriate method, tune hyperparameters without using the test set, and assess out-of-sample performance.
7. **Deploy and monitor.** Integrate the output into a decision process, monitor data and model drift, and define escalation and retraining rules.

Before collecting data, the analyst should be able to answer:

- What decision will the output change?
- Is the target available at the time a prediction would be made?
- Who will use the result, and how will it enter the business process?
- What are the costs of false positives and false negatives?
- What legal, privacy, licensing, and ethical restrictions apply?

## Data Preparation and Wrangling

**Data preparation** examines raw data and identifies and mitigates quality problems. **Data wrangling** transforms, combines, and reshapes the cleaned data into a form suitable for analysis.

### Common Data Errors

| Error | Meaning | Example |
| --- | --- | --- |
| Incompleteness | Required values are missing | No industry code for some companies |
| Invalidity | A value violates a rule or allowable range | Negative share count |
| Inaccuracy | A plausible value is wrong | Price recorded with the wrong decimal place |
| Inconsistency | Related fields contradict one another | Currency code says USD but values are in EUR |
| Non-uniformity | Units, formats, or definitions differ | Thousands mixed with millions |
| Duplication | The same economic observation appears repeatedly | One filing ingested from two feeds |
| Staleness | A value is no longer current | Old headquarters location |

Missing data should not be handled mechanically. Deleting incomplete rows can bias the sample when missingness is systematic. Imputation preserves observations but understates uncertainty if the filled values are treated as observed facts. The analyst should investigate why values are missing and, when useful, add a missingness indicator.

### Structured-Data Transformations

Typical operations include:

- **Extraction:** obtain a field or substring, such as the year from a date.
- **Filtering:** retain observations satisfying a rule.
- **Selection:** retain relevant columns or features.
- **Aggregation:** combine records, such as transactions into monthly totals.
- **Conversion:** change units, formats, or data types.
- **Joining:** combine sources using entity identifiers and dates.
- **Winsorization or robust transformation:** limit the effect of extreme observations while documenting the rule.

Two common scaling transformations are:

**Min–max normalization** maps a feature to a specified interval, commonly $[0,1]$:

$$
x_i^*=\frac{x_i-x_{\min}}{x_{\max}-x_{\min}}.
$$

**Standardization** produces a mean of zero and standard deviation of one:

$$
z_i=\frac{x_i-\mu}{\sigma}.
$$

Estimate $x_{\min}$, $x_{\max}$, $\mu$, and $\sigma$ on the **training set only**, then apply those values to validation, test, and live data. Otherwise, information leaks across samples.

> [!WARNING]
> Point-in-time alignment is essential in finance. Joining today's restated fundamentals to historical prices creates look-ahead bias because the revised information was not available then. Publication timestamps and historical constituent lists must reflect what an investor could actually have known.

## Preparing Text Data

Text projects follow the same overall workflow but require text-specific processing:

1. formulate a text-based objective and define inputs and outputs;
2. collect documents through licensed feeds, APIs, or permitted web crawling;
3. annotate labels when supervised learning is used;
4. clean, tokenize, normalize, and represent the documents numerically;
5. explore terms and engineer text features;
6. train, validate, deploy, and monitor the model.

### Cleaning and Tokenization

Cleaning may remove HTML tags, normalize whitespace, resolve encoding problems, and handle punctuation or numbers. Whether punctuation and numbers should be removed depends on the task: `10%`, `$5bn`, and a question mark may carry important meaning in financial text.

**Tokenization** divides text into analytical units. A token can be a word, subword, punctuation mark, or other symbol; it is not necessarily equivalent to a word.

Normalization can include:

- converting case when capitalization is not informative;
- removing selected stop words, while retaining words such as `not` when they affect meaning;
- **stemming**, which applies mechanical rules to reduce inflected words and can create non-words;
- **lemmatization**, which maps a word to its dictionary base form using linguistic context.

These steps are choices, not universal requirements. Modern language models often retain word order, punctuation, and stop words and use subword tokenization rather than a classic bag-of-words pipeline.

### Bag-of-Words and the Document–Term Matrix

A **bag-of-words (BOW)** representation records how often vocabulary terms occur in each document. It is a vector of counts or weights—not merely a set—although it ignores word order and most context.

For $D$ documents and $V$ vocabulary terms, the document–term matrix has dimension $D\times V$. Entry $(d,t)$ contains the count or weight of term $t$ in document $d$. The matrix is often high-dimensional and sparse.

### Term Frequency and TF–IDF

Term frequency $TF(t,d)$ measures how often term $t$ appears in document $d$, sometimes divided by the document's token count. Document frequency is

$$
DF(t)=\#\{d:t\in d\}.
$$

With $N$ documents, inverse document frequency can be defined as

$$
IDF(t)=\log\left(\frac{N}{DF(t)}\right),
$$

and

$$
TF\text{-}IDF(t,d)=TF(t,d)\times IDF(t).
$$

Implementations often add smoothing to avoid division by zero. TF–IDF gives less weight to terms appearing in nearly every document and more weight to terms that are frequent in a particular document but uncommon across the corpus.

<iframe
  class="term-frequency-chart"
  src="/charts/text-term-frequency.html"
  title="Term-frequency example from analyst reports"
  loading="lazy"
></iframe>

The chart shows raw corpus frequency. A word cloud also represents frequency, but aligned rows make close comparisons and exact values easier to read. Extremely rare tokens may be errors or noise, while extremely common tokens may add little discriminatory information; neither group should be removed without considering the task.

## Data Exploration and Feature Development

### Exploratory Data Analysis

Exploratory data analysis (EDA) uses numerical summaries and visualizations to understand the data before final model selection.

For structured data, examine:

- central tendency, dispersion, quantiles, skewness, kurtosis, and missingness;
- histograms, box plots, density plots, scatterplots, and correlation heat maps;
- univariate distributions as well as multivariate relationships;
- stability across time, industries, markets, or other economically relevant groups.

High-dimensional data can be explored using dimension-reduction techniques such as PCA, covered in [M6: Principal Components Analysis](./M6%20Machine%20Learning.md#principal-components-analysis).

For text data, exploration can examine document length, vocabulary size, term and n-gram frequency, co-occurrence, class balance, topics, sentiment, and changes through time.

### Feature Selection

Feature selection retains useful existing predictors. Potential approaches include:

- correlation or other measures of association;
- chi-square tests for dependence between categorical features and classes;
- mutual information between a feature and a target;
- model-based importance or regularization;
- economic judgment and stability analysis.

For discrete variables $X$ and $Y$, mutual information is

$$
I(X;Y)=\sum_{x,y}p(x,y)\log\left(\frac{p(x,y)}{p(x)p(y)}\right).
$$

It is zero when the variables are independent and positive when knowing one reduces uncertainty about the other. Mutual information is **not generally bounded by 1**; its scale depends on the logarithm base and the variables' distributions.

Feature selection must occur inside the training or cross-validation process. Selecting features using the full dataset leaks information from validation and test observations.

### Feature Engineering

Feature engineering creates predictors by transforming, decomposing, or combining raw variables. Examples include:

- converting price and earnings per share into an earnings yield or P/E ratio;
- calculating sales growth, leverage, rolling volatility, or surprise relative to consensus;
- converting timestamps into session, weekday, or reporting-season indicators;
- creating lags using only information available before the prediction time.

Text feature engineering can include:

- replacing numbers with typed tokens such as `<PERCENTAGE>` or preserving their magnitude;
- constructing **n-grams** such as `going concern` to preserve useful multiword patterns;
- **named-entity recognition** to identify companies, people, locations, currencies, or products;
- part-of-speech tagging;
- sentiment, uncertainty, readability, or topic features;
- dense embeddings learned from neural language models.

> [!NOTE]
> A feature can be statistically predictive yet economically unusable if it arrives too late, violates licensing terms, cannot be reproduced in production, or reflects the target through leakage.

## Model Selection, Training, and Evaluation

Method selection depends on the learning objective, target type, data form, sample size, dimensionality, nonlinear relationships, interpretability needs, computational constraints, and cost of errors.

- Structured tabular data may suit penalized regression, trees, random forests, or neural networks.
- Text classification may use BOW or TF–IDF features with a linear classifier, or learned embeddings with a neural network.
- Topic discovery and document grouping are unsupervised tasks.
- Images and audio generally require specialized feature extraction or deep-learning architectures.

The detailed algorithms, sample division, overfitting controls, cross-validation, and performance measures are covered in [M6: Machine Learning](./M6%20Machine%20Learning.md).

### Parameters and Hyperparameters

- **Parameters** are learned from training data, such as regression coefficients or neural-network weights.
- **Hyperparameters** govern model structure or training and are chosen by the analyst, typically using validation data or cross-validation. Examples include the LASSO penalty, number of neighbors, tree depth, and learning rate.

**Tuning** searches for hyperparameter values that improve validation performance. The final test set should remain untouched until the model and hyperparameters have been selected.

### Classification Evaluation

| Actual / Predicted | Positive | Negative |
| --- | ---: | ---: |
| Positive | True positive (TP) | False negative (FN; Type II error) |
| Negative | False positive (FP; Type I error) | True negative (TN) |

$$
\text{Precision}=\frac{TP}{TP+FP},
\qquad
\text{Recall}=\text{TPR}=\frac{TP}{TP+FN},
$$

$$
\text{Accuracy}=\frac{TP+TN}{TP+TN+FP+FN},
$$

$$
F_1=2\frac{\text{Precision}\times\text{Recall}}
{\text{Precision}+\text{Recall}},
\qquad
FPR=\frac{FP}{FP+TN}.
$$

The receiver operating characteristic (ROC) curve plots TPR against FPR as the classification threshold changes. A curve closer to the upper-left corner and a larger area under the curve (AUC) indicate better ranking performance. Calling a curve “more convex” is imprecise; compare dominance and AUC instead.

Accuracy can be misleading with imbalanced classes. Select metrics and thresholds using the economic cost of the two error types, not a universal convention.

For continuous predictions, common measures include MAE, MSE, and root mean squared error:

$$
RMSE=\sqrt{\frac{1}{n}\sum_{i=1}^{n}(y_i-\hat y_i)^2}.
$$

RMSE penalizes large errors more heavily than MAE and has the same units as the target.

## Data and Model Governance

A technically accurate model can still fail because of weak governance. A robust process documents:

- source provenance, ownership, licensing, consent, and permitted uses;
- collection timestamps, revisions, and point-in-time availability;
- transformations, exclusions, labels, and versioned datasets;
- access controls, retention policies, privacy, and cybersecurity;
- model assumptions, validation results, limitations, and human oversight;
- production performance, drift, incidents, retraining, and retirement criteria.

### Bias and Drift

- **Selection bias:** the observed sample does not represent the intended population.
- **Survivorship bias:** failed or delisted entities are omitted.
- **Look-ahead bias:** future or subsequently revised information enters historical features.
- **Label bias:** target labels contain systematic human or process errors.
- **Proxy bias:** an apparently neutral feature indirectly captures a sensitive or prohibited characteristic.
- **Data drift:** the distribution of inputs changes.
- **Concept drift:** the relationship between inputs and the target changes.

Monitoring should track both predictive performance and the data-generating process. A stable average accuracy can conceal deteriorating performance in an important subgroup or market regime.

## Exam Checklist

- Distinguish structured, semi-structured, and unstructured data.
- Explain volume, velocity, variety, and veracity.
- Separate data preparation, wrangling, exploration, feature selection, and feature engineering.
- Distinguish normalization from standardization and avoid leakage when estimating scaling parameters.
- Explain tokenization, stemming, lemmatization, BOW, document–term matrices, n-grams, and TF–IDF.
- Know that tokens need not be words and that BOW stores counts or weights but loses order.
- Interpret chi-square and mutual information as association measures without claiming causality.
- Distinguish parameters from hyperparameters.
- Match classification and regression metrics to the analytical objective.
- Recognize point-in-time, privacy, licensing, bias, drift, and governance risks.

<style>
.term-frequency-chart {
  display: block;
  width: 100%;
  height: 470px;
  margin: 24px 0 30px;
  border: 0;
  border-radius: 24px;
  background: #F0EFEB;
}

@media (max-width: 700px) {
  .term-frequency-chart { height: 520px; }
}
</style>
