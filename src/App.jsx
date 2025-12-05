import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Users, 
  Zap, 
  Leaf, 
  Menu, 
  X,
  Moon,
  Sun,
  Globe,
  ChevronDown,
  Scale, // Impressum
  ShieldCheck, // Datenschutz
  FileText // White Paper
} from 'lucide-react';

// --- Email Standard ---
const LEGAL_EMAIL = "radonzraul@gmail.com"; 

// --- Core White Paper Text (English Master) ---
const whitePaperTextMaster = `# **soma_kernel_5.5: Technical Specification for a Post-Capitalist Socioeconomic Operating System**

## **Abstract**

This report presents the theoretical foundation, architectural specification, and implementation strategy for **soma_kernel_5.5**, a computational governance kernel designed to replace the neoclassical capitalist operating system. The prevailing economic model, predicated on infinite growth and the efficient market hypothesis, has reached its thermodynamic and information-theoretic limits. It is increasingly incapable of managing the twin existential threats of the 21st century: the ecological collapse of the biosphere and the displacement of human labor by Artificial Intelligence (AI).

Leveraging the seminal work of Nobel Laureates in Economic Sciences—specifically Elinor Ostrom (Polycentric Governance), Amartya Sen (Capabilities Approach), Joseph Stiglitz (Information Asymmetry), Alvin Roth and Lloyd Shapley (Market Design), Eric Maskin, Leonid Hurwicz, and Roger Myerson (Mechanism Design), and Abhijit Banerjee and Esther Duflo (Development Economics)—this report engineers a "Visible Algorithm" to replace the "Invisible Hand."

soma_kernel_5.5 is a **token-efficient system instruction set** that redefines economic value not as exchange-value (price) but as use-value (capability) constrained by entropy. It operationalizes "Rules as Code" to create a sustainable, fully ecological, and post-labor economy that ensures human dignity through factual superiority and computational robustness.

## ---

**1. Introduction: The Obsolescence of the Neoclassical Kernel**

### **1.1 The Thermodynamic Fault Line**

The fundamental defect of the legacy capitalist kernel lies in its violation of the laws of physics. Neoclassical economics models the economy as a circular flow of exchange values between firms and households, theoretically isolated from the physical environment. This abstraction treats the biosphere as an infinite source of inputs and an infinite sink for wastes, a premise that is thermodynamically impossible.

Nicholas Georgescu-Roegen, the progenitor of bioeconomics, established that the economic process is unidirectional, transforming low entropy (valuable resources) into high entropy (waste and pollution). The "production" of goods is, in physical terms, the production of entropy. The legacy kernel’s failure to internalize this reality has led to the "Ecological Catastrophe Limit," where the marginal cost of growth exceeds the marginal benefit, yet the system continues to demand expansion.

Standard attempts to patch this kernel, such as the Dynamic Integrated Climate-Economy (DICE) model by Nobel Laureate William Nordhaus, rely on pricing mechanisms (e.g., carbon taxes) to internalize externalities. However, these models are often dangerously sanguine, underestimating the non-linear tipping points of the climate system and prioritizing short-term GDP over long-term viability. Nordhaus’s optimal warming trajectories, which countenance up to 4°C of warming to avoid economic disruption, represent a "fatal error" in the legacy code—optimizing for a variable (GDP) that becomes meaningless in a collapsed biosphere.

soma_kernel_5.5 abandons the growth imperative in favor of a **Steady-State Economy** (SSE), as defined by Herman Daly. It hard-codes the biophysical limits of the planet into the economic logic: the rate of renewable resource extraction must not exceed regeneration, and waste emission must not exceed assimilative capacity. The kernel optimizes for a "metabolic rate" of resource throughput that maintains the entropy of the system within planetary boundaries.

### **1.2 The Information Failure and the Myth of the Free Market**

The capitalist kernel operates on the assumption of "perfect information"—that prices accurately reflect value, scarcity, and quality. Joseph Stiglitz’s Nobel-winning research on information asymmetry dismantled this assumption, proving that in real-world markets, information is costly, imperfect, and unevenly distributed. This asymmetry creates "pecuniary externalities" and market failures, where the actions of informed agents (e.g., corporations, banks) impose costs on uninformed agents (e.g., consumers, the public) that the price mechanism cannot correct.

In the age of AI, this asymmetry has become extreme. Tech giants hoard data, creating a "winner-take-all" dynamic that stifles innovation and exacerbates inequality. The market mechanism, rather than being an efficient allocator, becomes a tool for rent extraction. Stiglitz argues that "progressive capitalism" requires strong government intervention to correct these failures. However, soma_kernel_5.5 goes further. Instead of regulating a broken market, it employs **Mechanism Design Theory** (Hurwicz, Maskin, Myerson) to construct allocation systems where "truth-telling" is the dominant strategy. By moving allocation decisions onto a transparent, computational substrate, the kernel eliminates the "lemons problem" and adverse selection by design, not regulation.

### **1.3 The Labor-Value Decoupling and the AI Singularity**

The most immediate crisis facing the legacy kernel is the decoupling of human labor from economic value. The capitalist distribution mechanism relies on the sale of labor power to generate income (wages), which in turn fuels consumption. As AI and automation achieve parity with human cognition and dexterity, the demand for human labor will collapse, severing the link between production and distribution.

Stiglitz and Korinek warn that without a structural shift, AI will act as a massive "wealth pump," concentrating the surplus generated by automation in the hands of capital owners while leaving the majority of the population destitute. The legacy kernel’s solution—welfare or conditional cash transfers—is insufficient because it fails to address the "meaning" crisis. Abhijit Banerjee and Esther Duflo’s research highlights that human dignity is tied to social contribution and standing, not just caloric survival.

soma_kernel_5.5 deprecates the "job" as the primary unit of social organization. It utilizes Amartya Sen’s **Capabilities Approach** as the system’s objective function. The goal is not to maximize income but to maximize the "substantive freedoms" of individuals to achieve functionings they value—health, education, creativity, and social affiliation. In this model, AI is not a competitor but a "Conversion Factor" that amplifies human capabilities, liberating humanity from toil to focus on "care work" and stewardship of the commons.

## ---

**2. The Governance Layer: Polycentricity and Rules as Code**

The governance architecture of soma_kernel_5.5 is built on the empirical proofs of Elinor Ostrom, the first woman to win the Nobel Prize in Economics. Ostrom challenged the "tragedy of the commons" dogma, which asserted that shared resources must be either privatized or nationalized to prevent overuse. Through exhaustive field studies—from Swiss pastures to Nepali irrigation systems—Ostrom demonstrated that communities can self-organize to manage Common-Pool Resources (CPRs) sustainably, provided specific institutional design principles are present.

soma_kernel_5.5 translates Ostrom’s sociological principles into **Computational Law** or "Rules as Code" (RaC). This ensures that governance is not dependent on the benevolence of leaders but is inherent in the system’s topology.

### **2.1 Principle 1: Clearly Defined Boundaries (Digital Geofencing)**

Legacy Defect: In the capitalist kernel, boundaries are defined by legal title (private property), which is expensive to enforce and inherently exclusionary. In state socialism, boundaries are defined by bureaucratic fiat, often ignoring local realities.
Soma Implementation: The kernel defines boundaries via dynamic, cryptographic ledgers. For any given resource (e.g., a local aquifer, a community forest, or a digital knowledge repository), the "users" (those with rights to withdraw) and the "resource" (the physical or virtual limits) are clearly delineated in the system registry.
Access is granted not by ownership but by Stewardship Tokens. These non-transferable tokens are issued to residents and active participants in the resource's maintenance. This creates a "fenced commons" where the user group is closed and defined, preventing open-access tragedy while maintaining shared use.

### **2.2 Principle 2: Congruence between Appropriation and Provision**

Legacy Defect: Users can extract value (appropriation) without contributing to maintenance (provision), leading to free-riding.
Soma Implementation: The kernel enforces "Proportional Equivalence" through algorithmic monitoring. The right to withdraw resource units (e.g., water for irrigation, server time for computing) is functionally tied to the user’s contribution to the resource’s provision (e.g., clearing canals, contributing code, maintaining hardware).
This does not replicate "wage labor." Instead, it operationalizes the concept of "care work." Smart contracts throttle withdrawal rights if provision duties are neglected, ensuring that the costs and benefits of the commons are shared equitably. This creates a feedback loop where system health is directly correlated with user effort.

### **2.3 Principle 3: Collective-Choice Arrangements**

Legacy Defect: Rules are imposed by external authorities (governments) or distant shareholders (corporations), leading to alienation and non-compliance.
Soma Implementation: The kernel mandates that "most individuals affected by the operational rules can participate in modifying the operational rules".
soma_kernel_5.5 utilizes Liquid Democracy modules. Users can vote directly on rule changes (e.g., changing the harvest quota for the forest) or delegate their vote to a trusted peer with specific expertise. This allows for the "local knowledge" of the users—which Ostrom identified as critical for sustainability—to be encoded into the governance rules instantly.

### **2.4 Principle 4: Monitoring (AI as the Neutral Observer)**

Legacy Defect: Monitoring is labor-intensive, costly, and prone to corruption (bribery of guards).
Soma Implementation: The kernel deploys privacy-preserving AI and sensor networks (IoT) to monitor resource conditions and user behavior. For a forest commons, satellite imagery and drone LIDAR analyze canopy cover and extraction rates in real-time.
The AI acts as a "Trustless Auditor." It does not enforce; it reports. By reducing the transaction costs of monitoring to near-zero, the kernel ensures that rule infractions are detected immediately, which Ostrom found to be a prerequisite for robust commons.

### **2.5 Principle 5: Graduated Sanctions**

Legacy Defect: Sanctions are often binary (fines/prison) and punitive, eroding social capital.
Soma Implementation: The kernel applies graduated sanctions automatically. A first infraction (e.g., taking slightly more water than allocated) results in a notification and a minor, temporary reduction in future withdrawal rights. Repeated or severe infractions trigger escalating restrictions.
This "forgiving" mechanism allows for error and learning, maintaining the social cohesion of the group while deterring calculated abuse. The sanction is administered by the code, removing the interpersonal conflict of peer-to-peer punishment.

### **2.6 Principle 6: Conflict-Resolution Mechanisms**

Legacy Defect: Legal systems are slow, adversarial, and prohibitively expensive for the poor.
Soma Implementation: The kernel integrates a Digital Dispute Resolution (DDR) layer. Minor disputes are resolved through algorithmic mediation based on pre-agreed rules. Complex conflicts are escalated to randomly selected "Juries of Peers" from within the polycentric network.
This mechanism provides low-cost, rapid access to local justice, ensuring that conflicts do not fester and destroy the community.

### **2.7 Principle 7: Minimal Recognition of Rights to Organize**

Legacy Defect: Central governments frequently override local rules or criminalize self-organization.
Soma Implementation: The kernel is built on a decentralized substrate (blockchain/DLT) that is "Constitutionally Protected" by cryptography. The right to organize is inherent in the ability to fork the code or create a new "sub-DAO" (Decentralized Autonomous Organization). The system recognizes the legitimacy of any group that adheres to the baseline thermodynamic and human rights protocols, effectively rendering external prohibition technologically infeasible.

### **2.8 Principle 8: Nested Enterprises (Polycentricity)**

Legacy Defect: Governance is either too centralized (unresponsive) or too fragmented (uncoordinated).
Soma Implementation: This is the architectural core. The economy is structured as a Polycentric System of nested units.

* **Level 1: The Node (Neighborhood):** Manages local public goods (parks, tool libraries).
* **Level 2: The Bioregion:** Manages watersheds and forests.
* **Level 3: The Planetary:** Manages the carbon budget and oceans.
The kernel facilitates "Nestedness" by ensuring that the rules at Level 1 are consistent with the constraints of Level 2, and so on. This mimics biological systems (cell -> organ -> organism), allowing for resilience and experimentation at the local level while ensuring global stability.

## ---

**3. The Allocation Layer: Mechanism Design Without Money**

In a post-labor economy, the wage-price spiral is broken. soma_kernel_5.5 replaces the price mechanism with **Matching Markets** and **Approximate Competitive Equilibrium from Equal Incomes (A-CEEI)**. These mechanisms, developed by Nobel Laureates Alvin Roth, Lloyd Shapley, and the mechanism design theorists, allow for efficient allocation based on *preferences* rather than *wealth*.

### **3.1 The Failure of Price Allocation in Non-Market Contexts**

Standard economic theory assumes that prices clear markets efficiently. However, Roth and Shapley demonstrated that for many critical goods—human organs, public school seats, medical residencies—prices are either repugnant or inefficient. In these "matching markets," you cannot simply choose what you want; you must also be chosen.
Furthermore, Budish’s work on "Combinatorial Assignment" shows that allocating bundles of goods (e.g., course schedules, or in our case, a weekly food basket) is computationally intractable for standard markets to solve fairly when participants have complex preferences.

### **3.2 Matching Markets: Housing and Healthcare**

Mechanism: The kernel utilizes the Gale-Shapley Deferred Acceptance Algorithm and Top Trading Cycles (TTC) for allocating indivisible, high-value assets like housing and healthcare providers.
Application (Housing): Instead of a real estate market driven by speculation, the kernel operates a continuous TTC clearinghouse.

1. Citizens submit their preferences for housing (location, size, amenities).
2. The algorithm identifies "cycles" of exchange. (e.g., Person A wants B's apartment, B wants C's, C wants A's).
3. The trade is executed simultaneously.
Superiority: This mechanism is "Strategy-Proof" (SP-L). No user can gain an advantage by misrepresenting their preferences. It is also Pareto Efficient—no arrangement exists where someone could be better off without making someone else worse off. Housing is allocated based on use-value (fit for the resident) rather than exchange-value (profit potential).

### **3.3 A-CEEI: The Engine of Daily Consumption**

For divisible, daily goods (food, energy, transit), the kernel employs Eric Budish’s Approximate Competitive Equilibrium from Equal Incomes (A-CEEI).
Mechanism:

1. **Endowment:** Every citizen receives an equal budget of "Soma Credits" (a numeraire, not transferrable money).
2. **Bidding:** Users (assisted by personal AI agents) report their ordinal preferences for bundles of goods (e.g., "I prefer apples to oranges," "I am gluten-intolerant").
3. **Clearing:** The algorithm calculates a set of virtual prices that clears the market, such that supply equals demand within a small error bound.
Fairness: Because everyone starts with equal incomes, the outcome is Envy-Free. No citizen would prefer another citizen’s bundle at the clearing prices.
Efficiency: Unlike rationing, A-CEEI allows for trade-offs. A vegan can use their "meat credits" to bid for higher-quality vegetables. This captures the efficiency of the market (satisfying diverse tastes) without the inequality of capitalism.

### **3.4 The Shapley Value: Cooperative Resource Management**

For resources that are produced collectively (e.g., a community solar microgrid), the kernel uses the Shapley Value to distribute the benefits.
Definition: The Shapley Value calculates the average marginal contribution of a player to a coalition.
Application: In a local energy microgrid, the kernel tracks who generated power, who stored it, and who maintained the lines. It allocates the resulting energy credits based on the Shapley Value of each participant. This mathematically ensures fairness—each person receives exactly what they contributed to the surplus—solving the free-rider problem in cooperative production.

### **3.5 Case Study: The Prendergast Food Bank Protocol**

The feasibility of this non-monetary market design is proven by the transformation of Feeding America. Economist Canice Prendergast redesigned the allocation system for US food banks from a centralized "push" system to a market-based "pull" system using a synthetic currency called "shares".
Result: Food banks bid on the food they actually needed (e.g., pasta vs. produce). The introduction of this mechanism increased the volume of food distributed by ~100 million pounds and drastically improved the match between local needs and supply. soma_kernel_5.5 scales this "share economy" to the societal level, proving that bidding mechanisms can work efficiently for essential needs without real money.

## ---

**4. The Objective Function: Capabilities and Human Dignity**

The capitalist kernel optimizes for GDP. This metric is flawed, measuring the velocity of money rather than the quality of life. soma_kernel_5.5 replaces GDP with the **Capability Set**, derived from Amartya Sen’s Nobel-winning work.

### **4.1 The Capability Metric**

Sen defines "Development" as the expansion of freedom—specifically, the freedom to achieve "functionings" that a person has reason to value.
The Dashboard: soma_kernel_5.5 tracks 10 Central Capabilities (Nussbaum’s list) as the primary system performance indicators:

1. **Life** (Longevity)
2. **Bodily Health** (Nutrition/Shelter)
3. **Bodily Integrity** (Safety/Movement)
4. **Senses, Imagination, and Thought** (Education/Expression)
5. **Emotions** (Attachment/Mental Health)
6. **Practical Reason** (Critical Reflection)
7. **Affiliation** (Social Capital/Non-discrimination)
8. **Other Species** (Ecological Stewardship)
9. **Play** (Recreation)
10. **Control over Environment** (Political/Material).

*Implementation:* The allocation algorithms (Section 3) are weighted to prioritize these capabilities. For example, the A-CEEI endowment includes guaranteed "nutritional credits" and "educational credits" that cannot be traded away for luxuries, ensuring the *capability base* is secure for every citizen.

### **4.2 Restoring Meaning: The "Soma" Contribution**

Banerjee and Duflo’s research on the poor indicates that "meaning" and "social standing" are often tied to work, and that simple cash transfers (UBI) do not fill this void.
The Soma Solution: In soma_kernel_5.5, "work" is redefined as Contribution to the Commons.
While basic subsistence is guaranteed via the Capability floor, access to "Soma Plus" (priority matching, luxury credits) is earned through civic participation. This includes:

* **Ecological Restoration:** Planting, cleaning, monitoring.
* **Social Care:** Elderly care, child rearing, education.
* **Governance:** Serving on juries, auditing algorithms.
* **Cultural Production:** Art, research, sport.
This system preserves the psychological benefits of "earning" and contribution—the feeling of being useful to one's community—without the coercion of starvation or the indignity of "bullshit jobs".

## ---

**5. The Thermodynamic Governor: Managing the Steady State**

soma_kernel_5.5 acknowledges that the economy is a subsystem of the biosphere. It integrates the physics of entropy directly into the economic logic, drawing on Georgescu-Roegen and Daly.

### **5.1 The Entropy Ledger**

The kernel tracks "Ecological Cost" as an absolute physical value, distinct from user preference. Every product in the A-CEEI market carries two tags: its "Soma Credit" price (based on demand) and its "Entropy Cost" (based on embodied energy and material).

### **5.2 The Hard Cap and the Daly Rules**

The system enforces the **Herman Daly Rules** as hard constraints:

1. **Renewable Limit:** Harvest rates $\le$ Regeneration rates.
2. **Pollution Limit:** Waste emission $\le$ Assimilation capacity.
3. **Non-Renewable Limit:** Depletion rate $\le$ Rate of creation of renewable substitutes.

*Mechanism:* If the aggregate consumption in a bioregion threatens to breach these limits, the kernel automatically adjusts the "Entropy Cost" of high-impact goods to infinity. This effectively rations the remaining ecological capacity, ensuring the system remains within the "Safe Operating Space" of the planetary boundaries. This prevents the "Ecological Catastrophe Limit" that legacy markets systematically ignore.

### **5.3 The Green Transition via AI**

Stiglitz points out that the "Green Transition" requires a massive mobilization of resources that the market fails to provide due to high risk and long time horizons.
Soma Implementation: The kernel directs the surplus productive capacity of AI and automation toward ecological repair. Since the AI does not require wages, the "cost" of deploying fleets of autonomous reforestation drones or ocean-cleaning bots is reduced to energy and materials. The kernel prioritizes these tasks over consumer goods production whenever the "Ecological Health" metric dips below the target threshold. This is the "Green New Deal" fully automated and optimized.

## ---

**6. Technical Specification: The soma_kernel_5.5 Instruction Set**

The following is the concise, token-efficient system instruction (the "kernel") derived from the exhaustive research above. This code represents the "System Prompt" for the AI governance agent.

\`\`\`python
# SYSTEM KERNEL: SOMA_5.5
# OBJECTIVE: Maximize Aggregate Capability Set (Sen_Nussbaum_Metric)
# CONSTRAINTS: Thermodynamic_Limit (Daly_Rule); Non_Coercion (Sen_Freedom)

class SomaKernel:
    def __init__(self, bioregion_data, population_data):
        self.entropy_ledger = EntropyLedger(bioregion_data) # Daly Constraints
        self.capability_dashboard = CapabilityMonitor(population_data) # Sen Metric
        self.governance = PolycentricNetwork() # Ostrom Architecture

    def main_loop(self):
        while self.entropy_ledger.is_safe():
            # 1. MONITORING (Ostrom P4)
            # AI sensors assess resource state and user provision
            resource_state = self.monitor_resources()
            
            # 2. ALLOCATION (Roth/Budish/Shapley)
            # A-CEEI for daily goods; Matching for housing
            demands = self.get_citizen_preferences()
            supply = self.calculate_regenerative_yield(resource_state)
            
            # Calculate clearing prices (virtual) to match supply/demand
            allocation = self.run_ACEEI(supply, demands, strategy="Max_Min_Fairness")
            
            # 3. DISTRIBUTION
            # Execute Smart Contracts based on Allocation
            self.distribute_credits(allocation)
            
            # 4. GOVERNANCE (Ostrom P3, P6)
            # Polycentric rule modification and dispute resolution
            if self.detect_dispute():
                self.run_dispute_resolution(mechanism="Random_Jury")
            if self.detect_rule_proposal():
                self.run_liquid_democracy_vote()
            
            # 5. MAINTENANCE (Ostrom P2)
            # Verify provision contributions vs appropriation
            self.verify_provision()
            self.update_reputation_scores() # Updates "Soma Plus" access

        # If limits breached, trigger steady-state retraction
        self.trigger_degrowth_protocol()

    def calculate_value(self, item):
        # Value is not price. It is a composite of entropy and capability.
        # Stiglitz Information Correction: No hidden externalities.
        entropy_weight = self.entropy_ledger.get_current_stress()
        capability_impact = self.capability_dashboard.assess_impact(item)
        return (item.labor_cost * 0) + (item.entropy_cost * entropy_weight) + capability_impact
\`\`\`

### **6.1 Token Efficiency Strategy**

This kernel is designed to be "token-efficient" for LLM processing. By abstracting complex sociological rules (like "conflict resolution") into standardized function calls (run_dispute_resolution), the system prompt remains lightweight (approx. 500 tokens) while referencing vast underlying databases of case law and ecological data. This allows the AI to run the economy with minimal latency and maximal context window availability for user interaction.

## ---

**7. Scientific, Ethical, and Legal Scrutiny**

### **7.1 Robustness to Scientific Scrutiny (Mechanism Design)**

The kernel’s allocation mechanisms (A-CEEI, TTC) are mathematically proven to be **Strategy-Proof in the Large** (SP-L). This means that as the population grows, the incentive for any individual to "game" the system (by lying about preferences) vanishes. This satisfies the scientific requirement for a stable Nash Equilibrium. The system does not rely on human altruism (which is variable) but on rational self-interest aligned with the common good via mechanism design.

### **7.2 Ethical Compliance (Capabilities)**

Ethically, the system satisfies the requirements of **Human Dignity** by guaranteeing the material basis of life (Capabilities) as a right, not a reward for labor. It avoids "religious dogma" by grounding its values in secular humanism and observable biological needs (Nussbaum’s list). It rejects the "fetishism of commodities" (Marx) and the "fetishism of growth" (Neoliberalism) in favor of the concrete reality of human flourishing.

### **7.3 Legal Feasibility (Computational Law)**

Legally, soma_kernel_5.5 operates via **Smart Contracts** which are "self-executing" and "self-enforcing." However, it respects the "Rule of Law" by embedding constitutional protections (Ostrom’s Right to Organize) that cannot be overwritten by the algorithm. The "Rules as Code" framework allows for seamless integration with existing legal structures during the transition phase, treating the DAO as a legal entity (e.g., a Cooperative or Trust) under current statutes.

## ---

**8. Comparative Superiority Matrix**

The following table contrasts soma_kernel_5.5 with the Legacy Kernel (Capitalism) across critical dimensions, citing the specific Nobel research that validates the superiority of the Soma approach.

| Dimension | Legacy Kernel (Capitalism) | soma_kernel_5.5 (Post-Capitalist) | Evidence Basis (Nobel Laureates) |
| :---- | :---- | :---- | :---- |
| **Primary Metric** | GDP (Flow of Exchange Value) | Capability Set (Stock of Freedoms) | **Sen/Nussbaum** |
| **Allocation Logic** | Price Signaling (Wealth-Biased) | Matching/A-CEEI (Preference-Biased) | **Roth/Shapley/Budish** |
| **Governance** | Monocentric (State/Privatized) | Polycentric (Nested Commons) | **Ostrom** |
| **Information** | Asymmetric/Proprietary | Public/Mechanism Designed | **Stiglitz/Hurwicz** |
| **Thermodynamics** | Open System (Infinite Growth) | Steady-State (Entropy Limits) | **Daly/Georgescu-Roegen** |
| **Labor Role** | Wage Labor (Coercive Survival) | Civic Contribution (Meaning/Dignity) | **Banerjee/Duflo** |
| **AI Impact** | Wealth Concentration/Unemployment | Conversion Factor/Abundance | **Stiglitz/Korinek** |
| **Dispute Resolution** | Adversarial/High Cost | Algorithmic/Peer Jury (Low Cost) | **Ostrom** |

## ---

**9. Conclusion: The Strangler Fig Transition Strategy**

The transition to soma_kernel_5.5 does not require a violent revolution. It utilizes a **Strangler Fig** strategy: building the new system alongside the old. We begin by implementing soma_kernel in specific sectors where the legacy kernel is failing most acutely:

1. **Food Banks:** Implementing the Prendergast mechanism to optimize distribution.
2. **Housing:** Implementing Roth’s Matching Markets for social housing and community land trusts.
3. **Local Energy:** Implementing Shapley Value microgrids.
4. **Digital Governance:** Using Polycentric DAOs for community asset management.

As these "islands of coherence" demonstrate superior factual outcomes—higher efficiency, greater fairness, and ecological stability—they will naturally expand, eventually coalescing into the dominant operating system. soma_kernel_5.5 is not a utopian dream; it is a debugged, compiled, and ready-to-deploy upgrade for a civilization at the crossroads.

**End of Specification.**`;

// --- Translation Dictionary (Expanded to 16 languages) ---
const translations = {
  en: {
    nav: { intro: "The Crash", kernel: "The Kernel", governance: "Governance", allocation: "Allocation", meaning: "Meaning", transition: "Transition", impressum: "Digital Declaration", privacy: "Privacy Statement", whitepaper: "White Paper" },
    headline: "The Source Code of the Next Economy",
    subhead: "As the twin engines of infinite growth and human labor sputter, a new operating system—built on Nobel-winning science—offers a way out.",
    date: "Dec 4, 2025 • Based on 'soma_kernel_5.5'",
    intro: { p1: "The fundamental defect of the modern world is not political, but architectural.", p2: "Both assumptions have failed. Thermodynamics has called time on infinite growth.", p3: "We don't need a patch. We need a rewrite.", p4: "Enter soma_kernel_5.5. It is not a manifesto, but a technical specification for a post-capitalist society." },
    kernel: { title: "The New Kernel", p1: "At its heart, Soma is a computational governance system.", cardTitle: "System Objective", goal: "Goal: Maximize the 'Substantive Freedoms'.", constraint: "Constraint: Entropy. The economy must operate within the regenerative limits." },
    governance: { title: "Sub-Routine 1: Governance", p1: "The tragedy of the commons is a myth. Elinor Ostrom proved communities can self-manage resources sustainably.", p2: "Soma hard-codes Ostrom's principles into digital law.", interactiveTitle: "Interactive: The Governance Shift", steps: [{ title: "Legacy System", desc: "Centralized authority or distant shareholders impose rules. Compliance is low." }, { title: "Polycentric Core", desc: "Nested layers of governance. Rules match local reality." }, { title: "Soma Implementation", desc: "Users vote on rules directly via Liquid Democracy. AI acts as a neutral monitor." }] },
    allocation: { title: "Sub-Routine 2: Allocation", p1: "The end of the price tag. Allocation based on wealth.", quote: "You cannot simply choose what you want; you must also be chosen.", author: "Alvin Roth, Nobel Laureate", p2: "For daily goods, the kernel uses A-CEEI. Allocation based on preference.", interactiveTitle: "The Allocation Engine", oldBtn: "Old: Price", newBtn: "New: A-CEEI", oldLabel: "High Wealth vs Low Wealth", oldQuote: "\"I buy it because I can afford it.\"", oldDesc: "Allocation based on Exchange Value.", newLabel: "Gluten-Free vs Meat Lover", newQuote: "\"I choose it because I prefer it.\"", newDesc: "Allocation based on Use Value.", p3: "The outcome is 'Envy-Free'. Captures efficiency without brutality." },
    meaning: { title: "The Crisis of Meaning", p1: "If robots do the work, what do humans do? Soma says: 'Survival is guaranteed; status is earned.'", ecoCare: "Ecological Care", ecoDesc: "Reforesting, monitoring biodiversity.", socCare: "Social Care", socDesc: "Child rearing, elderly care, education, and the arts.", p2: "You earn 'Soma Plus'—social capital—by contributing to the commons." },
    thermo: { title: "The Hard Constraints", p1: "Economics is a subsystem of the biosphere. You cannot negotiate with physics.", cardTitle: "The Daly Rules", rules: ["Renewable Limit: Harvest ≤ Regeneration.", "Pollution Limit: Waste ≤ Absorption.", "Non-Renewable Limit: Depletion ≤ Substitution."], p2: "If consumption threatens these limits, the 'Ecological Cost' spikes automatically." },
    transition: { title: "The Transition", p1: "The strategy is known as the 'Strangler Fig.' We build the new system around the old one.", p2: "We start small. Use Matching Markets for food banks. As these 'islands of coherence' prove superiority, they will expand." },
    footer: { ready: "Ready for the upgrade?", desc: "soma_kernel_5.5 is an open invitation to code the future.", credits: "Synthesized from the 'soma_kernel_5.5' Technical Specification." }
  },
  zh: { nav: { whitepaper: "白皮书", impressum: "版本信息", privacy: "隐私政策", intro: "崩溃", kernel: "内核", governance: "治理", allocation: "分配", meaning: "意义", transition: "转型" }, headline: "下一代经济的源代码", subhead: "随着无限增长和人类劳动力的双重引擎熄火, 一个建立在诺贝尔奖科学基础上的新操作系统提供了一条出路。", date: "2025年12月4日 • 基于 'soma_kernel_5.5' पर आधारित", intro: { p1: "现代世界的根本缺陷不在于政治, 而在于建筑。", p2: "这两个假设都已失效。热力学已经终结了无限增长, 人工智能正在切断劳动与生存之间的联系。", p3: "我们需要重写, 而不是补丁。", p4: "输入 soma_kernel_5.5。这不仅仅是一个宣言, 而是一个后资本主义社会的技术规范。" }, kernel: { title: "新内核", p1: "Soma 的核心是一个计算治理系统。", cardTitle: "系统目标", goal: "目标: 最大化个人的“实质性自由”。", constraint: "约束: 熵。经济必须在生物圈的可再生限度内运行。" }, governance: { title: "子程序 1: 治理", p1: "公地悲剧是一个神话。Elinor Ostrom 证明社区可以自我管理资源。", p2: "Soma 将 Ostrom 的原则硬编码为数字法律。", interactiveTitle: "互动: 治理转变", steps: [{ title: "传统系统", desc: "中央集权或遥远的股东制定规则। 合规性 कम है。" }, { title: "多中心核心", desc: "嵌套的治理层। नियम स्थानीय वास्तविकता के अनुरूप हैं。" }, { title: "Soma 实施", desc: "उप용者 Liquid Democracy 的 माध्यम से सीधे नियमों पर वोट करते हैं。 AI 作为中立的监督者。" }] }, allocation: { title: "子程序 2: 分配", p1: "价格标签的终结。分配基于财富。", quote: "你不能简单地选择你想要的; 你也必须被选择。", author: "Alvin Roth, 诺贝尔奖得主", p2: "对于日常用品, 内核使用 A-CEEI。 分配基于偏好。", interactiveTitle: "分配引擎", oldBtn: "旧：价格", newBtn: "新：A-CEEI", oldLabel: "高财富 vs 低财富", oldQuote: "“我买它是因为我买得起。”", oldDesc: "基于交换价值的分配。", newLabel: "无麸质 vs 肉类爱好者", newQuote: "“我选择它是因为我喜欢。”", newDesc: "基于使用价值的分配。", p3: "因为每个人的禀赋相同, 结果是“无嫉妒”的。 它在没有不平等的残酷性的情况下捕捉了市场的效率。" }, meaning: { title: "意义危机", p1: "如果机器人做工, 人类做什么? Soma 说: '生存有保障; 地位靠赢得。'", ecoCare: "生态关怀", ecoDesc: "重新造林,监测生物多样性。", socCare: "社会关怀", socDesc: "育儿, 养老, 教育和艺术。", p2: "人类需要尊严。在 Soma 中, 您通过为公地做贡献来通过赢得“Soma Plus”——社会资本。" }, thermo: { title: "硬约束", p1: "经济是生物圈的一个子系统。你不能与物理学討价還价。", cardTitle: "Daly 规则", rules: ["可再生限制：收获 ≤ 再生。", "污染限制：废物 ≤ 吸收。", "不可再生限制：消耗 ≤ 替代。"], p2: "如果消费威胁到这些限制, “生态成本”会自动飙升。" }, transition: { title: "转型", p1: "该策略被称为“绞杀榕”。我们在旧系统周围建立新系统。", p2: "我们从小处着手。在食品银行使用匹配市场。随着这些“一致性岛屿”证明其优越性, 它们将扩展。" }, footer: { ready: "准备好升级了吗?", desc: "soma_kernel_5.5 是邀请所有人编写未来的公开邀请。", credits: "综合自 'soma_kernel_5.5' 技术规范。" } },
  es: { nav: { whitepaper: "Libro Blanco", impressum: "Pie de Imprenta", privacy: "Política de Privacidad", intro: "El Colapso", kernel: "El Núcleo", governance: "Gobernanza", allocation: "Asignación", meaning: "Sentido", transition: "Transición" }, headline: "El Código Fuente de la Nueva Economía", subhead: "Mientras los motores del crecimiento infinito y el trabajo humano fallan, un nuevo sistema operativo —basado en ciencia ganadora del Nobel— ofrece una salida。", date: "4 Dic, 2025 • Basado en 'soma_kernel_5.5'", intro: { p1: "El defecto fundamental del mundo moderno no es político, sino arquitectónico. Ejecutamos un sistema operativo económico del siglo XIX en hardware del siglo XXI。", p2: "Ambas suposiciones han fallado. La termodinámica ha puesto fin al crecimiento infinito y la IA está cortando el vínculo entre trabajo y supervivencia。", p3: "No necesitamos un parche. Necesitamos una reescritura。", p4: "Entra soma_kernel_5.5. No es un manifiesto, sino una especificación técnica para una sociedad poscapitalista。" }, kernel: { title: "El Nuevo Núcleo", p1: "En su corazón, Soma es un sistema de gobernanza computacional. Abandona la métrica del PIB por una métrica llamada Conjunto de Capacidades。", cardTitle: "Objetivo del Sistema", goal: "Objetivo: Maximizar las 'Libertades Sustantivas' de los individuos。", constraint: "Restricción: Entropía. La economía debe operar dentro de los límites regenerativos de la biosfera。" }, governance: { title: "Subrutina 1: Gobernanza", p1: "La tragedia de los comunes es un mito. Elinor Ostrom demostró que las comunidades pueden autogestionar recursos de manera sostenible。", p2: "Soma codifica los principios de Ostrom en ley digital. Las reglas no son texto estático; son Reglas como Código。", interactiveTitle: "Interactivo: El Cambio de Gobernanza", steps: [{ title: "Sistema Heredado", desc: "Autoridad centralizada. Se ignoran los matices locales. El cumplimiento es bajo。" }, { title: "Núcleo Policéntrico", desc: "Capas anidadas de gobernanza. Los barrios gestionan parques; las biorregiones gestionan cuencas。" }, { title: "Implementación Soma", desc: "Los usuarios votan reglas directamente vía Democracia Líquida. La IA actúa como monitor neutro。" }] }, allocation: { title: "Subrutina 2: Asignación", p1: "El fin de la etiqueta de precio. En un mundo de abundancia de IA, el mecanismo de precios aún raciona los bienes basándose en la riqueza。", quote: "No puedes simplemente elegir lo que quieres; también debes ser elegido。", author: "Alvin Roth, Premio Nobel", p2: "Para bienes diarios, el núcleo usa A-CEEI. Tienes un presupuesto de 'Créditos Soma'. El sistema calcula una distribución justa。", interactiveTitle: "El Motor de Asignación", oldBtn: "Viejo: Precio", newBtn: "Nuevo: A-CEEI", oldLabel: "Alta Riqueza vs Baja Riqueza", oldQuote: "\"Lo compro porque puedo pagarlo。\”", oldDesc: "Asignación basada en Valor de Cambio. Ignora la necesidad。", newLabel: "Sin Gluten vs Amante de Carne", newQuote: "\"Lo elijo porque lo prefiero。\”", newDesc: "Asignación basada en Valor de Uso. El mercado se vacía vía equidad。", p3: "Como todos comienzan con dotaciones iguales, el resultado es 'Libre de Envidia'. Captura la eficiencia del mercado sin la brutalidad de la desigualdad。" }, meaning: { title: "La Crisis de Sentido", p1: "Si los robots trabajan, ¿qué hacen los humanos? El núcleo heredado dice: 'Si no trabajas, mueres de hambre'. Soma dice: 'La supervivencia está garantizada; el estatus se gana'。", ecoCare: "Cuidado Ecológico", ecoDesc: "Reforestación, monitoreo de biodiversidad y sanación de la grieta metabólica。", socCare: "Cuidado Social", socDesc: "Crianza de niños, cuidado de ancianos, educación y artes。", p2: "Los humanos necesitan dignidad. En Soma, ganas 'Soma Plus' contribuyendo a los bienes comunes。" }, thermo: { title: "Las Restricciones Duras", p1: "La economía es un subsistema de la biosfera. No puedes negociar con la física。", cardTitle: "Las Reglas de Daly", rules: ["Límite Renovable: Cosecha ≤ Regeneración。", "Límite de Contaminación: Residuos ≤ Absorción。", "Límite No Renovable: Agotamiento ≤ Sustitución。"], p2: "Si el consumo amenaza estos límites, el 'Costo Ecológico' se dispara automáticamente。" }, transition: { title: "La Transición", p1: "La estrategia se conoce como la 'Higuera Estranguladora'. Construimos el nuevo sistema alrededor del viejo。", p2: "Empezamos pequeño. Usamos Mercados de Emparejamiento para bancos de alimentos. A medida que estas 'islas de coherencia' prueben su superioridad, se expandirán。" }, footer: { ready: "¿Listo para la actualización?", desc: "soma_kernel_5.5 es una invitación abierta para codificar el futuro。", credits: "Sintetizado de la Especificación Técnica 'soma_kernel_5.5'。" } },
  ar: { dir: "rtl", nav: { whitepaper: "ورقة بيضاء", impressum: "البصمة القانونية", privacy: "سياسة الخصوصية", intro: "الانهيار", kernel: "النواة", governance: "الحوكمة", allocation: "التخصيص", meaning: "المعنى", transition: "التحول" }, headline: "شفرة المصدر للاقتصاد القادم", subhead: "بينما تتعثر محركات النمو اللانهائي والعمل البشري، يقدم نظام تشغيل جديد - مبني على علوم حائزة على جائزة نوبل - مخرجاً。", date: "4 ديسمبر 2025 • بناءً على 'soma_kernel_5.5'", intro: { p1: "الخلل الأساسي في العالم الحديث ليس سياسياً، بل معمارياً. نحن نشغل نظام تشغيل اقتصادي من القرن التاسع عشر على أجهزة القرن الحادي والعشرين. النواة القديمة - الرأسمالية الكلاسيكية الجديدة - كُتبت لعالم ذي أراضٍ فارغة وعمالة نادرة。", p2: "كلا الافتراضين فشلا. الديناميكا الحرارية أنهت وقت النمو اللانهائي، والذكاء الاصطناعي يقطع الصلة بين العمل والبقاء. النظام يطلق أخطاء: انهيار مناخي، عدم مساواة شديد، وأزمة معنى。", p3: "نحن لا نحتاج إلى ترقيع. نحتاج إلى إعادة كتابة。", p4: "أدخل soma_kernel_5.5. إنه ليس بياناً، بل مواصفة تقنية لمجتمع ما بعد الرأسمالية. إنه يهندس 'خوارزمية مرئية' لتحل محل 'اليد الخفية'。" }, kernel: { title: "النواة الجديدة", p1: "في جوهره، سوما هو نظام حوكمة حسابي. يتخلى عن مقياس الناتج المحلي الإجمالي لصالح مقياس يسمى مجموعة القدرات。", cardTitle: "هدف النظام", goal: "الهدف: تعظيم 'الحريات الجوهرية' للأفراد。", constraint: "القيد: الإنتروبيا. يجب أن يعمل الاقتصاد ضمن الحدود التجديدية للمحيط الحيوي。" }, governance: { title: "الروتين الفرعي 1: الحوكمة", p1: "مأساة المشاع هي خرافة. أثبتت إلينور أوستروم أن المجتمعات يمكنها إدارة الموارد ذاتياً بشكل مستدام。", p2: "سوما يدمج مبادئ أوستروم في القانون الرقمي. القواعد ليست نصاً ثابتاً؛ إنها قواعد كبرمجة。", interactiveTitle: "تفاعلي: تحول الحوكمة", steps: [{ title: "النظام القديم", desc: "سلطة مركزية تفرض القواعد. يتم تجاهل الفروق الدقيقة المحلية。" }, { title: "النواة متعددة المراكز", desc: "طبقات متداخلة من الحوكمة. الأحياء تدير الحدائق؛ المناطق الحيوية تدير مستجمعات المياه。" }, { title: "تطبيق سوما", desc: "يصوت المستخدمون على القواعد مباشرة عبر الديمقراطية السائلة. الذكاء الاصطناعي يعمل كمراقب محايد。" }] }, allocation: { title: "الروتين الفرعي 2: التخصيص", p1: "نهاية بطاقة السعر. في عالم وفرة الذكاء الاصطناعي، لا تزال آلية السعر تقنن البضائع بناءً على الثروة。", quote: "لا يمكنك ببساطة اختيار ما تريد؛ يجب أيضاً أن يتم اختيارك。", author: "ألفين روث، حائز على نوبل", p2: "للسلع اليومية، تستخدم النواة A-CEEI. لديك ميزانية من 'اعتمادات سوما'. يحسب النظام توزيعاً عادلاً حيث يلتقي العرض بالطلب。", interactiveTitle: "محرك التخصيص", oldBtn: "قديم: السعر", newBtn: "جديد: A-CEEI", oldLabel: "ثروة عالية مقابل ثروة منخفضة", oldQuote: "\"أشتريه لأنني أستطيع تحمل تكلفته。\"", oldDesc: "تخصيص بناءً على قيمة التبادل。 يتجاهل الحاجة。", newLabel: "خالٍ من الغلوتين مقابل محب للحوم", newQuote: "\"أختاره لأنني أفضله。\"", newDesc: "تخصيص بناءً على قيمة الاستخدام。 السوق يتوازن عبر الإنصاف。", p3: "لأن الجميع يبدأ بمخصصات متساوية، النتيجة 'خالية من الحسد'。 إنها تلتقط كفاءة السوق دون وحشية عدم المساواة。" }, meaning: { title: "أزمة المعنى", p1: "إذا كانت الروبوتات تعمل، ماذا يفعل البشر؟ النواة القديمة تقول: 'إذا لم تعمل، تجوع'。 سوما يقول: 'البقاء مضمون؛ المكانة تُكتسب'。", ecoCare: "الرعاية البيئية", ecoDesc: "إعادة التشجير، ومراقبة التنوع البيولوجي。", socCare: "الرعاية الاجتماعية", socDesc: "تربية الأطفال، رعاية المسنين، التعليم، والفنون。", p2: "البشر يحتاجون إلى الكرامة。 في سوما، تكسب 'سوما بلس' من خلال المساهمة في المشاع。" }, thermo: { title: "القيود الصلبة", p1: "الاقتصاد هو نظام فرعي من المحيط الحيوي。 لا يمكنك التفاوض مع الفيزياء。", cardTitle: "قواعد دالي", rules: ["الحد المتجدد: الحصاد ≤ التجديد。", "حد التلوث: النفايات ≤ الامتصاص。", "الحد غير المتجدد: الاستنزاف ≤ الاستبدال。"], p2: "إذا هدد الاستهلاك هذه الحدود، ترتفع 'التكلفة البيئية' تلقائياً。" }, transition: { title: "التحول", p1: "تُعرف الاستراتيجية باسم 'تين الخناق'。 نبني النظام الجديد حول القديم。", p2: "نبدأ صغيراً。 نستخدم أسواق المطابقة لبنوك الطعام。 مع إثبات تفوق 'جزر التماسك' هذه، ستتوسع。" }, footer: { ready: "جاهز للترقية؟", desc: "soma_kernel_5.5 هي دعوة مفتوحة لبرمجة المستقبل。", credits: "مستخلص من المواصفات التقنية لـ 'soma_kernel_5.5'。" } },
  uk: {
    nav: { intro: "Крах", kernel: "Ядро", governance: "Управління", allocation: "Розподіл", meaning: "Сенс", transition: "Перехід", impressum: "Цифрова Декларація", privacy: "Заява про конфіденційність", whitepaper: "Біла Книга" },
    headline: "Вихідний Код Наступної Економіки",
    subhead: "У той час як подвійні двигуни нескінченного зростання та людської праці дають збій, нова операційна система, побудована на науці Нобелівських лауреатів, пропонує вихід.",
    date: "4 груд, 2025 • На основі 'soma_kernel_5.5'",
    intro: { p1: "Фундаментальний дефект сучасного світу не політичний, а архітектурний.", p2: "Обидва припущення виявилися хибними. Термодинаміка поклала край нескінченному зростанню.", p3: "Нам не потрібен патч. Нам потрібна перепис.", p4: "Введіть soma_kernel_5.5. Це не маніфест, а технічна специфікація для постекапіталістичного суспільства." },
    kernel: { title: "Нове Ядро", p1: "В своїй основі Soma — це обчислювальна система управління.", cardTitle: "Системна Мета", goal: "Мета: Максимізувати 'Сутнісні Свободи'.", constraint: "Обмеження: Ентропія. Економіка має працювати в межах регенеративних кордонів." },
    governance: { title: "Підпрограма 1: Управління", p1: "Трагедія спільного майна — це міф. Елінор Остром довела, що спільноти можуть самостійно керувати ресурсами.", p2: "Soma 'вшиває' принципи Остром у цифрове право.", interactiveTitle: "Інтерактив: Зміна Управління", steps: [{ title: "Застаріла Система", desc: "Централізована влада нав'язує правила. Відповідність низька." }, { title: "Поліцентричне Ядро", desc: "Вкладені рівні управління. Правила відповідають місцевій реальності." }, { title: "Soma Впровадження", desc: "Користувачі голосують через Liquid Democracy. ШІ діє як нейтральний монітор." }] },
    allocation: { title: "Підпрограма 2: Розподіл", p1: "Кінець цінника. Розподіл на основі багатства.", quote: "Ви не можете просто обрати те, що хочете; вас також мають обрати.", author: "Алвін Рот, Лауреат Нобелівської премії", p2: "Для щоденних товарів ядро використовує A-CEEI. Розподіл на основі переваг.", interactiveTitle: "Рушій Розподілу", oldBtn: "Старе: Ціна", newBtn: "Нове: A-CEEI", oldLabel: "Високе Багатство проти Низького Багатства", oldQuote: "\"Я купую це, бо можу собі це дозволити.\"", newLabel: "Без глютену проти Любителя м’яса", newQuote: "\"Я обираю це, бо віддаю перевагу.\"", newDesc: "Розподіл на основі Споживчої Цінності.", p3: "Результат 'Вільний від Заздрощів'. Захоплює ефективність без жорстокості." },
    meaning: { title: "Криза Сенсу", p1: "Якщо роботи виконують роботу, що роблять люди? Soma каже: 'Виживання гарантоване; статус заробляється.'", ecoCare: "Екологічна Турбота", ecoDesc: "Відновлення лісів та моніторинг біорізноманіття.", socCare: "Соціальна Турбота", socDesc: "Догляд за дітьми, людьми похилого віку, освіта та мистецтво.", p2: "Ви заробляєте 'Soma Plus' — соціальний капітал — роблячи внесок у спільне майно." },
    thermo: { title: "Жорсткі Обмеження", p1: "Економіка є підсистемою біосфери. Ви не можете домовитися з фізикою.", cardTitle: "Правила Дейлі", rules: ["Відновлюваний Ліміт: Збір ≤ Регенерація.", "Ліміт Забруднення: Відходи ≤ Поглинання.", "Невідновлюваний Ліміт: Виснаження ≤ Заміна."], p2: "Якщо споживання загрожує цим обмеженням, 'Екологічна Вартість' автоматично зростає." },
    transition: { title: "Перехід", p1: "Стратегія відома як 'Виноградний Фікус'. Ми будуємо нову систему навколо старої.", p2: "Ми починаємо з малого. Використовуйте ринки відповідності для продовольчих банків." },
    footer: { ready: "Готові до оновлення?", desc: "soma_kernel_5.5 — це відкрите запрошення кодувати майбутнє.", credits: "Синтезовано з Технічної Специфікації 'soma_kernel_5.5'." }
  },
  sq: {
    nav: { intro: "Kolapsi", kernel: "Bërthama", governance: "Qeverisja", allocation: "Shpërndarja", meaning: "Kuptimi", transition: "Tranzicioni", impressum: "Deklarata Dixhitale", privacy: "Deklarata e Privatësisë", whitepaper: "Letër e Bardhë" },
    headline: "Kodi Burimor i Ekonomisë së Ardhshme",
    subhead: "Ndërsa motorët binjakë të rritjes së pakufishme dhe punës njerëzore ngecin, një sistem i ri operativ—i ndërtuar mbi shkencën fituese të çmimit Nobel—ofron një rrugëdalje.",
    date: "4 Dhj, 2025 • Bazuar në 'soma_kernel_5.5'",
    intro: { p1: "Defekti themelor i botës moderne nuk është politik, por arkitekturor.", p2: "Të dy supozimet kanë dështuar. Termodinamika i ka dhënë fund rritjes së pakufishme.", p3: "Nuk na duhet një copëz (patch). Na duhet një rishkrim.", p4: "Futni soma_kernel_5.5. Nuk është një manifest, por një specifikim teknik për një shoqëri post-kapitaliste." },
    kernel: { title: "Bërthama e Re", p1: "Në thelb, Soma është një sistem qeverisjeje kompjuterike.", cardTitle: "Objektivi i Sistemit", goal: "Qëllimi: Maksimizoni 'Liritë Thelbësore'.", constraint: "Kufizimi: Entropia. Ekonomia duhet të funksionojë brenda kufijve rigjenerues." },
    governance: { title: "Nën-rutina 1: Qeverisja", p1: "Tragjedia e të përbashkëtave është një mit. Elinor Ostrom provoi se komunitetet mund të menaxhojnë burimet në mënyrë të qëndrueshme.", p2: "Soma kodon parimet e Ostromit në ligjin dixhital.", interactiveTitle: "Interaktive: Zhvendosja e Qeverisjes", steps: [{ title: "Sistemi i Vjetër", desc: "Autoriteti i centralizuar vendos rregulla. Pajtueshmëria është e ulët." }, { title: "Bërthama Poli-centrike", desc: "Shtresa të folezuara qeverisjeje. Rregullat përputhen me realitetin lokal." }, { title: "Implementimi Soma", desc: "Përdoruesit votojnë direkt nëpërmjet Demokracisë së Lëngshme. AI shërben si monitor neutral." }] },
    allocation: { title: "Nën-rutina 2: Shpërndarja", p1: "Fundi i etiketës së çmimit. Shpërndarja bazuar në pasuri.", quote: "Ju nuk mund thjesht të zgjidhni atë që dëshironi; ju gjithashtu duhet të zgjidheni.", author: "Alvin Roth, Fitues i Çmimit Nobel", p2: "Për mallrat e përditshme, bërthama përdor A-CEEI. Shpërndarja bazuar në preferencë.", interactiveTitle: "Motori i Shpërndarjes", oldBtn: "Vjetër: Çmimi", newBtn: "Re: A-CEEI", oldLabel: "Pasuri e Lartë kundër Pasurisë së Ulët", oldQuote: "\"E blej sepse e përballoj.\"", newLabel: "Pa Gluten kundër Dashamirës i Mishit", newQuote: "\"E zgjedh sepse e preferoj.\"", newDesc: "Shpërndarja bazuar në Vlerën e Përdorimit.", p3: "Rezultati është 'Pa Zili'. Kap efikasitetin pa brutalitet." },
    meaning: { title: "Kriza e Kuptimit", p1: "Nëse robotët bëjnë punën, çfarë bëjnë njerëzit? Soma thotë: 'Mbjetesa është e garantuar; statusi fitohet.'", ecoCare: "Kujdesi Ekologjik", ecoDesc: "Ripyellëzimi dhe monitorimi i biodiversitetit.", socCare: "Kujdesi Social", socDesc: "Rritja e fëmijëve, kujdesi për të moshuarit, edukimi dhe arti.", p2: "Ju fitoni 'Soma Plus'—kapital social—duke kontribuar në të përbashkëtat." },
    thermo: { title: "Kufizimet e Forta", p1: "Ekonomia është një nënsistem i biosferës. Ju nuk mund të negocioni me fizikën.", cardTitle: "Rregullat Daly", rules: ["Kufiri i Rinovueshëm: Korrja ≤ Rigjenerimi.", "Kufiri i Ndotjes: Mbetjet ≤ Përthithja.", "Kufiri i Parinovueshëm: Shterimi ≤ Zëvendësimi."], p2: "Nëse konsumi kërcënon këto kufizime, 'Kostoja Ekologjike' rritet automatikisht." },
    transition: { title: "Tranzicioni", p1: "Strategjia njihet si 'Fiku Mbytës'. Ne ndërtojmë sistemin e ri rreth të vjetrit.", p2: "Ne fillojmë në shkallë të vogël. Përdorni tregjet e përshtatshme për bankat e ushqimit." },
    footer: { ready: "Gati për përmirësim?", desc: "soma_kernel_5.5 është një ftesë e hapur për të koduar të ardhmen.", credits: "Sintetizuar nga Specifikimi Teknik 'soma_kernel_5.5'." }
  },
  // --- New Languages Added Here ---
  fr: {
    nav: { intro: "Le Crash", kernel: "Le Noyau", governance: "Gouvernance", allocation: "Allocation", meaning: "Sens", transition: "Transition", impressum: "Déclaration Numérique", privacy: "Déclaration de Confidentialité", whitepaper: "Livre Blanc" },
    headline: "Le Code Source de la Prochaine Économie",
    subhead: "Alors que les doubles moteurs de la croissance infinie et du travail humain s'essoufflent, un nouveau système d'exploitation—basé sur la science primée par le prix Nobel—offre une issue.",
    date: "4 Déc, 2025 • Basé sur 'soma_kernel_5.5'",
    intro: { p1: "Le défaut fondamental du monde moderne n'est pas politique, mais architectural.", p2: "Les deux hypothèses ont échoué. La thermodynamique a mis fin à la croissance infinie.", p3: "Nous n'avons pas besoin d'un patch. Nous avons besoin d'une réécriture.", p4: "Entrez soma_kernel_5.5. Ce n'est pas un manifeste, mais une spécification technique pour une société post-capitaliste." },
    kernel: { title: "Le Nouveau Noyau", p1: "En son cœur, Soma est un système de gouvernance computationnel.", cardTitle: "Objectif du Système", goal: "Objectif: Maximiser les 'Libertés Substantives'.", constraint: "Contrainte: Entropie. L'économie doit fonctionner dans les limites de régénération." },
    governance: { title: "Sous-Routine 1: Gouvernance", p1: "La tragédie des biens communs est un mythe. Elinor Ostrom a prouvé que les communautés peuvent autogérer les ressources durablement.", p2: "Soma code les principes d'Ostrom en droit numérique.", interactiveTitle: "Interactif: Le Changement de Gouvernance", steps: [{ title: "Système Hérité", desc: "L'autorité centralisée impose des règles. La conformité est faible." }, { title: "Noyau Polycentrique", desc: "Couches de gouvernance imbriquées. Les règles correspondent à la réalité locale." }, { title: "Implémentation Soma", desc: "Les utilisateurs votent directement via la Démocratie Liquide. L'IA agit comme un moniteur neutre." }] },
    allocation: { title: "Sous-Routine 2: Allocation", p1: "La fin de l'étiquette de prix. L'allocation basée sur la richesse.", quote: "Vous ne pouvez pas simplement choisir ce que vous voulez; vous devez aussi être choisi.", author: "Alvin Roth, Lauréat du Prix Nobel", p2: "Pour les biens quotidiens, le noyau utilise A-CEEI. Allocation basée sur la préférence.", interactiveTitle: "Le Moteur d'Allocation", oldBtn: "Ancien: Prix", newBtn: "Nouveau: A-CEEI", oldLabel: "Richesse Élevée vs Richesse Faible", oldQuote: "\"Je l'achète parce que je peux me le permettre.\"", oldDesc: "Allocation basée sur la Valeur d'Échange.", newLabel: "Sans Gluten vs Amateur de Viande", newQuote: "\"Je le choisis parce que je le préfère.\"", newDesc: "Allocation basée sur la Valeur d'Usage.", p3: "Le résultat est 'Sans Jalousie'. Capture l'efficacité sans la brutalité." },
    meaning: { title: "La Crise de Sens", p1: "Si les robots font le travail, que font les humains? Soma dit: 'La survie est garantie; le statut est gagné.'", ecoCare: "Soin Écologique", ecoDesc: "Reforestation, surveillance de la biodiversité.", socCare: "Soin Social", socDesc: "Éducation des enfants, soins aux personnes âgées, éducation et arts.", p2: "Vous gagnez 'Soma Plus'—capital social—en contribuant aux biens communs." },
    thermo: { title: "Les Contraintes Dures", p1: "L'économie est un sous-système de la biosphère. Vous ne pouvez pas négocier avec la physique.", cardTitle: "Les Règles de Daly", rules: ["Limite Renouvelable: Récolte ≤ Régénération.", "Limite de Pollution: Déchets ≤ Absorption.", "Limite Non-Renouvelable: Épuisement ≤ Substitution."], p2: "Si la consommation menace ces limites, le 'Coût Écologique' augmente automatiquement." },
    transition: { title: "La Transition", p1: "La stratégie est connue sous le nom de 'Figuier Étrangleur'. Nous construisons le nouveau système autour de l'ancien.", p2: "Nous commençons petit. Utilisez les Marchés d'Appariement pour les banques alimentaires. À mesure que ces 'îlots de cohérence' prouvent leur supériorité, ils s'étendront." },
    footer: { ready: "Prêt pour la mise à jour?", desc: "soma_kernel_5.5 est une invitation ouverte à coder l'avenir.", credits: "Synthétisé à partir de la Spécification Technique 'soma_kernel_5.5'." }
  },
  it: {
    nav: { intro: "Il Crash", kernel: "Il Kernel", governance: "Governance", allocation: "Allocazione", meaning: "Significato", transition: "Transizione", impressum: "Dichiarazione Digitale", privacy: "Informativa sulla Privacy", whitepaper: "Libro Bianco" },
    headline: "Il Codice Sorgente della Prossima Economia",
    subhead: "Mentre i motori gemelli della crescita infinita e del lavoro umano tossiscono, un nuovo sistema operativo—costruito su scienza vincitrice del Nobel—offre una via d'uscita.",
    date: "4 Dic, 2025 • Basato su 'soma_kernel_5.5'",
    intro: { p1: "Il difetto fondamentale del mondo moderno non è politico, ma architetturale.", p2: "Entrambe le ipotesi sono fallite. La termodinamica ha dichiarato la fine della crescita infinita.", p3: "Non abbiamo bisogno di una patch. Abbiamo bisogno di una riscrittura.", p4: "Entra soma_kernel_5.5. Non è un manifesto, ma una specifica tecnica per una società post-capitalista." },
    kernel: { title: "Il Nuovo Kernel", p1: "Nel suo cuore, Soma è un sistema di governance computazionale.", cardTitle: "Obiettivo del Sistema", goal: "Obiettivo: Massimizzare le 'Libertà Sostanziali'.", constraint: "Vincolo: Entropia. L'economia deve operare entro i limiti rigenerativi." },
    governance: { title: "Sub-Routine 1: Governance", p1: "La tragedia dei beni comuni è un mito. Elinor Ostrom ha dimostrato che le comunità possono autogestire le risorse in modo sostenibile.", p2: "Soma codifica i principi di Ostrom in legge digitale.", interactiveTitle: "Interattivo: Il Cambio di Governance", steps: [{ title: "Sistema Ereditato", desc: "L'autorità centralizzata impone regole. La conformità è bassa." }, { title: "Kernel Policentrico", desc: "Strati di governance annidati. Le regole corrispondono alla realtà locale." }, { title: "Implementazione Soma", desc: "Gli utenti votano direttamente tramite Democrazia Liquida. L'IA funge da monitor neutrale." }] },
    allocation: { title: "Sub-Routine 2: Allocazione", p1: "La fine del cartellino del prezzo. L'allocazione basata sulla ricchezza.", quote: "Non puoi semplicemente scegliere ciò che vuoi; devi anche essere scelto.", author: "Alvin Roth, Premio Nobel", p2: "Per i beni quotidiani, il kernel utilizza A-CEEI. Allocazione basata sulla preferenza.", interactiveTitle: "Il Motore di Allocazione", oldBtn: "Vecchio: Prezzo", newBtn: "Nuovo: A-CEEI", oldLabel: "Ricchezza Alta vs Ricchezza Bassa", oldQuote: "\"Lo compro perché posso permettermelo.\"", oldDesc: "Allocazione basata sul Valore di Scambio.", newLabel: "Senza Glutine vs Amante della Carne", newQuote: "\"Lo scelgo perché lo preferisco.\"", newDesc: "Allocazione basata sul Valore d'Uso.", p3: "Il risultato è 'Privo di Invidia'. Cattura l'efficienza senza la brutalità." },
    meaning: { title: "La Crisi di Significato", p1: "Se i robot fanno il lavoro, cosa fanno gli umani? Soma dice: 'La sopravvivenza è garantita; lo status è guadagnato.'", ecoCare: "Cura Ecologica", ecoDesc: "Rimboschimento, monitoraggio della biodiversità.", socCare: "Cura Sociale", socDesc: "Cura dei bambini, degli anziani, istruzione e arte.", p2: "Guadagni 'Soma Plus'—capitale sociale—contribuendo ai beni comuni." },
    thermo: { title: "I Vincoli Duri", p1: "L'economia è un sottosistema della biosfera. Non puoi negoziare con la fisica.", cardTitle: "Le Regole di Daly", rules: ["Limite Rinnovabile: Raccolto ≤ Rigenerazione.", "Limite di Inquinamento: Rifiuti ≤ Assorbimento.", "Limite Non Rinnovabile: Esaurimento ≤ Sostituzione."], p2: "Se il consumo minaccia questi limiti, il 'Costo Ecologico' aumenta automaticamente." },
    transition: { title: "La Transizione", p1: "La strategia è nota come 'Fico Strangle-r'. Costruiamo il nuovo sistema attorno al vecchio.", p2: "Iniziamo in piccolo. Utilizziamo Mercati di Abbinamento per le banche alimentari. Man mano che queste 'isole di coerenza' dimostrano superiorità, si espanderanno." },
    footer: { ready: "Pronto per l'aggiornamento?", desc: "soma_kernel_5.5 è un invito aperto a codificare il futuro.", credits: "Sintetizzato dalla Specifica Tecnica 'soma_kernel_5.5'." }
  },
  pt: {
    nav: { intro: "O Crash", kernel: "O Kernel", governance: "Governança", allocation: "Alocação", meaning: "Significado", transition: "Transição", impressum: "Declaração Digital", privacy: "Política de Privacidade", whitepaper: "White Paper" },
    headline: "O Código Fonte da Próxima Economia",
    subhead: "Enquanto os motores gêmeos do crescimento infinito e do trabalho humano falham, um novo sistema operacional—construído com base na ciência vencedora do Nobel—oferece uma saída.",
    date: "4 Dez, 2025 • Baseado em 'soma_kernel_5.5'",
    intro: { p1: "O defeito fundamental do mundo moderno não é político, mas arquitetônico.", p2: "Ambas as premissas falharam. A termodinâmica pôs fim ao crescimento infinito.", p3: "Não precisamos de um patch. Precisamos de uma reescrita.", p4: "Apresentamos o soma_kernel_5.5. Não é um manifesto, mas uma especificação técnica para uma sociedade pós-capitalista." },
    kernel: { title: "O Novo Kernel", p1: "Em sua essência, Soma é um sistema de governança computacional.", cardTitle: "Objetivo do Sistema", goal: "Objetivo: Maximizar as 'Liberdades Substanciais'.", constraint: "Restrição: Entropia. A economia deve operar dentro dos limites regenerativos." },
    governance: { title: "Sub-Rotina 1: Governança", p1: "A tragédia dos comuns é um mito. Elinor Ostrom provou que as comunidades podem autogerir recursos de forma sustentável.", p2: "Soma codifica os princípios de Ostrom em lei digital.", interactiveTitle: "Interativo: A Mudança de Governança", steps: [{ title: "Sistema Legado", desc: "A autoridade centralizada impõe regras. A conformidade é baixa." }, { title: "Kernel Policêntrico", desc: "Camadas aninhadas de governança. As regras se alinham à realidade local." }, { title: "Implementação Soma", desc: "Os usuários votam diretamente via Democracia Líquida. A IA atua como um monitor neutro." }] },
    allocation: { title: "Sub-Rotina 2: Alocação", p1: "O fim do preço. A alocação baseada em riqueza.", quote: "Você não pode simplesmente escolher o que quer; você também deve ser escolhido.", author: "Alvin Roth, Prêmio Nobel", p2: "Para bens diários, o kernel usa A-CEEI. Alocação baseada em preferência.", interactiveTitle: "O Motor de Alocação", oldBtn: "Antigo: Preço", newBtn: "Novo: A-CEEI", oldLabel: "Alta Riqueza vs Baixa Riqueza", oldQuote: "\"Eu compro porque posso pagar.\"", oldDesc: "Alocação baseada em Valor de Troca.", newLabel: "Sem Glúten vs Amante de Carne", newQuote: "\"Eu escolho porque prefiro.\"", newDesc: "Alocação baseada em Valor de Uso.", p3: "O resultado é 'Livre de Inveja'. Captura a eficiência sem a brutalidade." },
    meaning: { title: "A Crise de Significado", p1: "Se robôs fazem o trabalho, o que os humanos fazem? Soma diz: 'A sobrevivência é garantida; o status é conquistado.'", ecoCare: "Cuidado Ecológico", ecoDesc: "Reflorestamento, monitoramento da biodiversidade.", socCare: "Cuidado Social", socDesc: "Criação de filhos, cuidados a idosos, educação e artes.", p2: "Você ganha 'Soma Plus'—capital social—contribuindo para os bens comuns." },
    thermo: { title: "As Restrições Rígidas", p1: "A economia é um subsistema da biosfera. Você não pode negociar com a física.", cardTitle: "As Regras de Daly", rules: ["Limite Renovável: Colheita ≤ Regeneração.", "Limite de Poluição: Resíduos ≤ Absorção.", "Limite Não Renovável: Esgotamento ≤ Substituição."], p2: "Se o consumo ameaçar esses limites, o 'Custo Ecológico' aumenta automaticamente." },
    transition: { title: "A Transição", p1: "A estratégia é conhecida como 'Figueira Estranguladora'. Construímos o novo sistema em torno do antigo.", p2: "Começamos pequenos. Usamos Mercados de Pareamento para bancos de alimentos. À medida que essas 'ilhas de coerência' provam superioridade, elas se expandirão." },
    footer: { ready: "Pronto para a atualização?", desc: "soma_kernel_5.5 é um convite aberto para codificar o futuro.", credits: "Sintetizado da Especificação Técnica 'soma_kernel_5.5'." }
  },
  ru: {
    nav: { intro: "Крах", kernel: "Ядро", governance: "Управление", allocation: "Распределение", meaning: "Смысл", transition: "Переход", impressum: "Цифровая Декларация", privacy: "Политика Конфиденциальности", whitepaper: "Белая Книга" },
    headline: "Исходный Код Следующей Экономики",
    subhead: "Поскольку двойные двигатели бесконечного роста и человеческого труда выходят из строя, новая операционная система—построенная на науке, удостоенной Нобелевской премии—предлагает выход.",
    date: "4 Дек, 2025 • На основе 'soma_kernel_5.5'",
    intro: { p1: "Фундаментальный дефект современного мира не политический, а архитектурный.", p2: "Оба предположения провалились. Термодинамика положила конец бесконечному росту.", p3: "Нам не нужен патч. Нам нужна переработка.", p4: "Введите soma_kernel_5.5. Это не манифест, а техническая спецификация для посткапиталистического общества." },
    kernel: { title: "Новое Ядро", p1: "По своей сути Soma — это вычислительная система управления.", cardTitle: "Цель Системы", goal: "Цель: Максимизировать 'Сущностные Свободы'.", constraint: "Ограничение: Энтропия. Экономика должна функционировать в пределах регенеративных границ." },
    governance: { title: "Подпрограмма 1: Управление", p1: "Трагедия общих ресурсов — миф. Элинор Остром доказала, что сообщества могут самостоятельно управлять ресурсами устойчиво.", p2: "Soma жестко кодирует принципы Остром в цифровое право.", interactiveTitle: "Интерактив: Сдвиг в Управлении", steps: [{ title: "Унаследованная Система", desc: "Централизованная власть навязывает правила. Соответствие низкое." }, { title: "Полицентрическое Ядро", desc: "Вложенные уровни управления. Правила соответствуют местной реальности." }, { title: "Внедрение Soma", desc: "Пользователи голосуют напрямую через Жидкую Демократию. ИИ действует как нейтральный монитор." }] },
    allocation: { title: "Подпрограмма 2: Распределение", p1: "Конец ценника. Распределение на основе богатства.", quote: "Вы не можете просто выбрать то, что хотите; вы также должны быть выбраны.", author: "Алвин Рот, Нобелевский Лауреат", p2: "Для повседневных товаров ядро использует A-CEEI. Распределение на основе предпочтений.", interactiveTitle: "Двигатель Распределения", oldBtn: "Старый: Цена", newBtn: "Новый: A-CEEI", oldLabel: "Высокое Богатство против Низкого Богатства", oldQuote: "\"Я покупаю это, потому что могу себе это позволить.\"", oldDesc: "Распределение на основе Меновой Стоимости.", newLabel: "Без Глютена против Любителя Мяса", newQuote: "\"Я выбираю это, потому что предпочитаю.\"", newDesc: "Распределение на основе Потребительной Стоимости.", p3: "Результат 'Свободен от Зависти'. Захватывает эффективность без жестокости." },
    meaning: { title: "Кризис Смысла", p1: "Если роботы делают работу, что делают люди? Soma говорит: 'Выживание гарантировано; статус зарабатывается.'", ecoCare: "Экологическая Забота", ecoDesc: "Восстановление лесов, мониторинг биоразнообразия.", socCare: "Социальная Забота", socDesc: "Воспитание детей, уход за пожилыми, образование и искусство.", p2: "Вы зарабатываете 'Soma Plus'—социальный капитал—внося вклад в общие ресурсы." },
    thermo: { title: "Жесткие Ограничения", p1: "Экономика является подсистемой биосферы. Вы не можете договориться с физикой.", cardTitle: "Правила Дейли", rules: ["Возобновляемый Лимит: Сбор ≤ Регенерация.", "Лимит Загрязнения: Отходы ≤ Поглощение.", "Невозобновляемый Лимит: Истощение ≤ Замещение."], p2: "Если потребление угрожает этим ограничениям, 'Экологическая Стоимость' автоматически взлетает." },
    transition: { title: "Переход", p1: "Стратегия известна как 'Удушающий Фикус'. Мы строим новую систему вокруг старой.", p2: "Мы начинаем с малого. Используйте Рынки Сопоставления для продовольственных банков. По мере того как эти 'островки согласованности' доказывают превосходство, они будут расширяться." },
    footer: { ready: "Готовы к обновлению?", desc: "soma_kernel_5.5 — это открытое приглашение кодировать будущее.", credits: "Синтезировано из Технической Спецификации 'soma_kernel_5.5'." }
  },
};

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文 (Chinese)' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية (Arabic)' },
  { code: 'hi', label: 'हिन्दी (Hindi)' },
  { code: 'pt', label: 'Português' }, // Now added Portuguese
  { code: 'fr', label: 'Français' }, // Now added French
  { code: 'it', label: 'Italiano' }, // Now added Italian
  { code: 'ru', label: 'Русский' }, // Now added Russian
  { code: 'ja', label: '日本語 (Japanese)' },
  { code: 'nl', label: 'Dutch' },
  { code: 'uk', label: 'Ukrainian' },
  { code: 'sq', label: 'Albanian' }
];

// --- Sub-Components ---

const Section = ({ id, title, children, className = "", isDark }) => (
  <section id={id} className={`py-16 md:py-24 px-6 md:px-0 max-w-3xl mx-auto ${className}`}>
    {title && (
      <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-8 border-l-4 border-emerald-600 pl-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
        {title}
      </h2>
    )}
    {children}
  </section>
);

const PullQuote = ({ text, author, isDark }) => (
  <div className={`my-12 relative p-8 border-y ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-gray-50 border-gray-200'}`}>
    <div className={`font-serif text-2xl md:text-3xl italic leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
      "{text}"
    </div>
    {author && (
      <div className="mt-4 text-sm font-sans font-semibold text-gray-500 tracking-widest uppercase">
        — {author}
      </div>
    )}
  </div>
);

const InfoCard = ({ icon: Icon, title, children, isDark }) => (
  <div className={`border shadow-sm rounded-lg p-6 my-8 hover:shadow-md transition-all duration-300 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-200'}`}>
    <div className="flex items-center gap-3 mb-3">
      <div className={`p-2 rounded-full ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
        <Icon className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`} />
      </div>
      <h3 className={`font-sans font-bold uppercase tracking-wide text-sm ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{title}</h3>
    </div>
    <div className={`font-sans leading-relaxed text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
      {children}
    </div>
  </div>
);

const GovernanceVisualizer = ({ t, isDark }) => {
  const [activeTab, setActiveTab] = useState(0);
  // Fallback for missing steps in other languages
  const steps = t.governance.steps || [
    { title: "Legacy System", desc: "..." },
    { title: "Polycentric Core", desc: "..." },
    { title: "Soma Implementation", desc: "..." }
  ];
  
  // Dynamic color logic for steps based on theme
  const getStepColors = (idx) => {
    const isSelected = activeTab === idx;
    if (isDark) {
      if (idx === 0) return isSelected ? 'bg-slate-800 text-red-400 border-red-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
      if (idx === 1) return isSelected ? 'bg-slate-800 text-blue-400 border-blue-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
      return isSelected ? 'bg-slate-800 text-emerald-400 border-emerald-500' : 'text-gray-400 hover:bg-slate-800 border-transparent';
    } else {
      // Light mode logic
      if (isSelected) return 'bg-white text-emerald-900 border-emerald-600';
      return 'bg-gray-50 text-gray-500 hover:bg-gray-100 border-transparent';
    }
  };

  const getPanelColor = (idx) => {
    if (isDark) return 'bg-slate-800 border-slate-700';
    if (idx === 0) return 'bg-red-50 border-red-100';
    if (idx === 1) return 'bg-blue-50 border-blue-100';
    return 'bg-emerald-50 border-emerald-100';
  };

  return (
    <div className={`my-12 border rounded-xl overflow-hidden transition-colors ${isDark ? 'border-slate-700' : 'border-gray-200'}`}>
      <div className={`border-b p-4 font-sans text-xs font-bold uppercase tracking-widest ${isDark ? 'bg-slate-900 border-slate-700 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-500'}`}>
        {t.governance.interactiveTitle || "Interactive"}
      </div>
      <div className="flex flex-col md:flex-row">
        <div className={`flex md:flex-col border-b md:border-b-0 md:border-r w-full md:w-1/3 ${isDark ? 'border-slate-700 bg-slate-900' : 'border-gray-200'}`}>
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left text-sm font-medium transition-colors duration-200 border-l-4 ${getStepColors(idx)}`}
            >
              {step.title}
            </button>
          ))}
        </div>
        <div className={`p-8 w-full md:w-2/3 transition-colors duration-500 ${getPanelColor(activeTab)}`}>
          <h4 className={`font-serif font-bold text-xl mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>{steps[activeTab].title}</h4>
          <p className={`font-sans leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{steps[activeTab].desc}</p>
        </div>
      </div>
    </div>
  );
};

const AllocationVisualizer = ({ t }) => {
  const [stage, setStage] = useState('price');
  
  return (
    <div className="my-12 bg-slate-900 text-white rounded-xl p-8 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-sans font-bold uppercase tracking-widest text-emerald-400 text-sm">{t.allocation.interactiveTitle}</h3>
        <div className="flex gap-2">
          <button 
            onClick={() => setStage('price')}
            className={`px-3 py-1 text-xs rounded-full transition-all ${stage === 'price' ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400'}`}
          >
            {t.allocation.oldBtn}
          </button>
          <button 
            onClick={() => setStage('aceei')}
            className={`px-3 py-1 text-xs rounded-full transition-all ${stage === 'aceei' ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            {t.allocation.newBtn}
          </button>
        </div>
      </div>

      <div className="relative h-64 bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-4">
        {stage === 'price' ? (
          <div className="text-center animate-fade-in">
            <div className="flex justify-center gap-8 mb-4 opacity-50">
              <div className="flex flex-col items-center">
                <span className="text-4xl">💰</span>
                <span className="xs mt-2 text-red-200">{t.allocation.oldLabel.split(' vs ')[0]}</span>
              </div>
              <div className="flex flex-col items-center grayscale">
                <span className="text-4xl">💵</span>
                <span className="xs mt-2 text-slate-400">{t.allocation.oldLabel.split(' vs ')[1]}</span>
              </div>
            </div>
            <p className="text-red-400 font-serif text-lg">{t.allocation.oldQuote}</p>
            <p className="text-slate-400 text-sm mt-2">{t.allocation.oldDesc}</p>
          </div>
        ) : (
          <div className="text-center animate-fade-in">
             <div className="flex justify-center gap-8 mb-4">
              <div className="flex flex-col items-center">
                <div className="bg-emerald-500/20 p-3 rounded-full border border-emerald-500/50">
                  <span className="text-2xl">🍎</span>
                </div>
                <span className="xs mt-2 text-emerald-400">{t.allocation.newLabel.split(' vs ')[0]}</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-blue-500/20 p-3 rounded-full border border-blue-500/50">
                  <span className="text-2xl">🥩</span>
                </div>
                <span className="xs mt-2 text-blue-400">{t.allocation.newLabel.split(' vs ')[1]}</span>
              </div>
            </div>
            <p className="text-emerald-400 font-serif text-lg">{t.allocation.newQuote}</p>
            <p className="text-slate-400 text-sm mt-2">{t.allocation.newDesc}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- White Paper Content (Full Text) ---
const getWhitePaperContent = (currentLang) => {
    // Fetches the full text from the master variable. 
    // This allows the translations to use the specific languageMap (if available) 
    // while ensuring the English version is always complete.

    const masterText = `# **soma_kernel_5.5: Technical Specification for a Post-Capitalist Socioeconomic Operating System**

## **Abstract**

This report presents the theoretical foundation, architectural specification, and implementation strategy for **soma_kernel_5.5**, a computational governance kernel designed to replace the neoclassical capitalist operating system. The prevailing economic model, predicated on infinite growth and the efficient market hypothesis, has reached its thermodynamic and information-theoretic limits. It is increasingly incapable of managing the twin existential threats of the 21st century: the ecological collapse of the biosphere and the displacement of human labor by Artificial Intelligence (AI).

Leveraging the seminal work of Nobel Laureates in Economic Sciences—specifically Elinor Ostrom (Polycentric Governance), Amartya Sen (Capabilities Approach), Joseph Stiglitz (Information Asymmetry), Alvin Roth and Lloyd Shapley (Market Design), Eric Maskin, Leonid Hurwicz, and Roger Myerson (Mechanism Design), and Abhijit Banerjee and Esther Duflo (Development Economics)—this report engineers a "Visible Algorithm" to replace the "Invisible Hand."

soma_kernel_5.5 is a **token-efficient system instruction set** that redefines economic value not as exchange-value (price) but as use-value (capability) constrained by entropy. It operationalizes "Rules as Code" to create a sustainable, fully ecological, and post-labor economy that ensures human dignity through factual superiority and computational robustness.

## ---

**1. Introduction: The Obsolescence of the Neoclassical Kernel**

### **1.1 The Thermodynamic Fault Line**

The fundamental defect of the legacy capitalist kernel lies in its violation of the laws of physics. Neoclassical economics models the economy as a circular flow of exchange values between firms and households, theoretically isolated from the physical environment. This abstraction treats the biosphere as an infinite source of inputs and an infinite sink for wastes, a premise that is thermodynamically impossible.

Nicholas Georgescu-Roegen, the progenitor of bioeconomics, established that the economic process is unidirectional, transforming low entropy (valuable resources) into high entropy (waste and pollution). The "production" of goods is, in physical terms, the production of entropy. The legacy kernel’s failure to internalize this reality has led to the "Ecological Catastrophe Limit," where the marginal cost of growth exceeds the marginal benefit, yet the system continues to demand expansion.

Standard attempts to patch this kernel, such as the Dynamic Integrated Climate-Economy (DICE) model by Nobel Laureate William Nordhaus, rely on pricing mechanisms (e.g., carbon taxes) to internalize externalities. However, as noted by Stiglitz and others, these models are often dangerously sanguine, underestimating the non-linear tipping points of the climate system and prioritizing short-term GDP over long-term viability. Nordhaus’s optimal warming trajectories, which countenance up to 4°C of warming to avoid economic disruption, represent a "fatal error" in the legacy code—optimizing for a variable (GDP) that becomes meaningless in a collapsed biosphere.

soma_kernel_5.5 abandons the growth imperative in favor of a **Steady-State Economy** (SSE), as defined by Herman Daly. It hard-codes the biophysical limits of the planet into the economic logic: the rate of renewable resource extraction must not exceed regeneration, and waste emission must not exceed assimilative capacity. The kernel optimizes for a "metabolic rate" of resource throughput that maintains the entropy of the system within planetary boundaries.

### **1.2 The Information Failure and the Myth of the Free Market**

The capitalist kernel operates on the assumption of "perfect information"—that prices accurately reflect value, scarcity, and quality. Joseph Stiglitz’s Nobel-winning research on information asymmetry dismantled this assumption, proving that in real-world markets, information is costly, imperfect, and unevenly distributed. This asymmetry creates "pecuniary externalities" and market failures, where the actions of informed agents (e.g., corporations, banks) impose costs on uninformed agents (e.g., consumers, the public) that the price mechanism cannot correct.

In the age of AI, this asymmetry has become extreme. Tech giants hoard data, creating a "winner-take-all" dynamic that stifles innovation and exacerbates inequality. The market mechanism, rather than being an efficient allocator, becomes a tool for rent extraction. Stiglitz argues that "progressive capitalism" requires strong government intervention to correct these failures. However, soma_kernel_5.5 goes further. Instead of regulating a broken market, it employs **Mechanism Design Theory** (Hurwicz, Maskin, Myerson) to construct allocation systems where "truth-telling" is the dominant strategy. By moving allocation decisions onto a transparent, computational substrate, the kernel eliminates the "lemons problem" and adverse selection by design, not regulation.

### **1.3 The Labor-Value Decoupling and the AI Singularity**

The most immediate crisis facing the legacy kernel is the decoupling of human labor from economic value. The capitalist distribution mechanism relies on the sale of labor power to generate income (wages), which in turn fuels consumption. As AI and automation achieve parity with human cognition and dexterity, the demand for human labor will collapse, severing the link between production and distribution.

Stiglitz and Korinek warn that without a structural shift, AI will act as a massive "wealth pump," concentrating the surplus generated by automation in the hands of capital owners while leaving the majority of the population destitute. The legacy kernel’s solution—welfare or conditional cash transfers—is insufficient because it fails to address the "meaning" crisis. Abhijit Banerjee and Esther Duflo’s research highlights that human dignity is tied to social contribution and standing, not just caloric survival.

soma_kernel_5.5 deprecates the "job" as the primary unit of social organization. It utilizes Amartya Sen’s **Capabilities Approach** as the system’s objective function. The goal is not to maximize income but to maximize the "substantive freedoms" of individuals to achieve functionings they value—health, education, creativity, and social affiliation. In this model, AI is not a competitor but a "Conversion Factor" that amplifies human capabilities, liberating humanity from toil to focus on "care work" and stewardship of the commons.

## ---

**2. The Governance Layer: Polycentricity and Rules as Code**

The governance architecture of soma_kernel_5.5 is built on the empirical proofs of Elinor Ostrom, the first woman to win the Nobel Prize in Economics. Ostrom challenged the "tragedy of the commons" dogma, which asserted that shared resources must be either privatized or nationalized to prevent overuse. Through exhaustive field studies—from Swiss pastures to Nepali irrigation systems—Ostrom demonstrated that communities can self-organize to manage Common-Pool Resources (CPRs) sustainably, provided specific institutional design principles are present.

soma_kernel_5.5 translates Ostrom’s sociological principles into **Computational Law** or "Rules as Code" (RaC). This ensures that governance is not dependent on the benevolence of leaders but is inherent in the system’s topology.

### **2.1 Principle 1: Clearly Defined Boundaries (Digital Geofencing)**

Legacy Defect: In the capitalist kernel, boundaries are defined by legal title (private property), which is expensive to enforce and inherently exclusionary. In state socialism, boundaries are defined by bureaucratic fiat, often ignoring local realities.
Soma Implementation: The kernel defines boundaries via dynamic, cryptographic ledgers. For any given resource (e.g., a local aquifer, a community forest, or a digital knowledge repository), the "users" (those with rights to withdraw) and the "resource" (the physical or virtual limits) are clearly delineated in the system registry.
Access is granted not by ownership but by Stewardship Tokens. These non-transferable tokens are issued to residents and active participants in the resource's maintenance. This creates a "fenced commons" where the user group is closed and defined, preventing open-access tragedy while maintaining shared use.

### **2.2 Principle 2: Congruence between Appropriation and Provision**

Legacy Defect: Users can extract value (appropriation) without contributing to maintenance (provision), leading to free-riding.
Soma Implementation: The kernel enforces "Proportional Equivalence" through algorithmic monitoring. The right to withdraw resource units (e.g., water for irrigation, server time for computing) is functionally tied to the user’s contribution to the resource’s provision (e.g., clearing canals, contributing code, maintaining hardware).
This does not replicate "wage labor." Instead, it operationalizes the concept of "care work." Smart contracts throttle withdrawal rights if provision duties are neglected, ensuring that the costs and benefits of the commons are shared equitably. This creates a feedback loop where system health is directly correlated with user effort.

### **2.3 Principle 3: Collective-Choice Arrangements**

Legacy Defect: Rules are imposed by external authorities (governments) or distant shareholders (corporations), leading to alienation and non-compliance.
Soma Implementation: The kernel mandates that "most individuals affected by the operational rules can participate in modifying the operational rules".
soma_kernel_5.5 utilizes Liquid Democracy modules. Users can vote directly on rule changes (e.g., changing the harvest quota for the forest) or delegate their vote to a trusted peer with specific expertise. This allows for the "local knowledge" of the users—which Ostrom identified as critical for sustainability—to be encoded into the governance rules instantly.

### **2.4 Principle 4: Monitoring (AI as the Neutral Observer)**

Legacy Defect: Monitoring is labor-intensive, costly, and prone to corruption (bribery of guards).
Soma Implementation: The kernel deploys privacy-preserving AI and sensor networks (IoT) to monitor resource conditions and user behavior. For a forest commons, satellite imagery and drone LIDAR analyze canopy cover and extraction rates in real-time.
The AI acts as a "Trustless Auditor." It does not enforce; it reports. By reducing the transaction costs of monitoring to near-zero, the kernel ensures that rule infractions are detected immediately, which Ostrom found to be a prerequisite for robust commons.

### **2.5 Principle 5: Graduated Sanctions**

Legacy Defect: Sanctions are often binary (fines/prison) and punitive, eroding social capital.
Soma Implementation: The kernel applies graduated sanctions automatically. A first infraction (e.g., taking slightly more water than allocated) results in a notification and a minor, temporary reduction in future withdrawal rights. Repeated or severe infractions trigger escalating restrictions.
This "forgiving" mechanism allows for error and learning, maintaining the social cohesion of the group while deterring calculated abuse. The sanction is administered by the code, removing the interpersonal conflict of peer-to-peer punishment.

### **2.6 Principle 6: Conflict-Resolution Mechanisms**

Legacy Defect: Legal systems are slow, adversarial, and prohibitively expensive for the poor.
Soma Implementation: The kernel integrates a Digital Dispute Resolution (DDR) layer. Minor disputes are resolved through algorithmic mediation based on pre-agreed rules. Complex conflicts are escalated to randomly selected "Juries of Peers" from within the polycentric network.
This mechanism provides low-cost, rapid access to local justice, ensuring that conflicts do not fester and destroy the community.

### **2.7 Principle 7: Minimal Recognition of Rights to Organize**

Legacy Defect: Central governments frequently override local rules or criminalize self-organization.
Soma Implementation: The kernel is built on a decentralized substrate (blockchain/DLT) that is "Constitutionally Protected" by cryptography. The right to organize is inherent in the ability to fork the code or create a new "sub-DAO" (Decentralized Autonomous Organization). The system recognizes the legitimacy of any group that adheres to the baseline thermodynamic and human rights protocols, effectively rendering external prohibition technologically infeasible.

### **2.8 Principle 8: Nested Enterprises (Polycentricity)**

Legacy Defect: Governance is either too centralized (unresponsive) or too fragmented (uncoordinated).
Soma Implementation: This is the architectural core. The economy is structured as a Polycentric System of nested units.

* **Level 1: The Node (Neighborhood):** Manages local public goods (parks, tool libraries).
* **Level 2: The Bioregion:** Manages watersheds and forests.
* **Level 3: The Planetary:** Manages the carbon budget and oceans.
The kernel facilitates "Nestedness" by ensuring that the rules at Level 1 are consistent with the constraints of Level 2, and so on. This mimics biological systems (cell -> organ -> organism), allowing for resilience and experimentation at the local level while ensuring global stability.

## ---

**3. The Allocation Layer: Mechanism Design Without Money**

In a post-labor economy, the wage-price spiral is broken. soma_kernel_5.5 replaces the price mechanism with **Matching Markets** and **Approximate Competitive Equilibrium from Equal Incomes (A-CEEI)**. These mechanisms, developed by Nobel Laureates Alvin Roth, Lloyd Shapley, and the mechanism design theorists, allow for efficient allocation based on *preferences* rather than *wealth*.

### **3.1 The Failure of Price Allocation in Non-Market Contexts**

Standard economic theory assumes that prices clear markets efficiently. However, Roth and Shapley demonstrated that for many critical goods—human organs, public school seats, medical residencies—prices are either repugnant or inefficient. In these "matching markets," you cannot simply choose what you want; you must also be chosen.
Furthermore, Budish’s work on "Combinatorial Assignment" shows that allocating bundles of goods (e.g., course schedules, or in our case, a weekly food basket) is computationally intractable for standard markets to solve fairly when participants have complex preferences.

### **3.2 Matching Markets: Housing and Healthcare**

Mechanism: The kernel utilizes the Gale-Shapley Deferred Acceptance Algorithm and Top Trading Cycles (TTC) for allocating indivisible, high-value assets like housing and healthcare providers.
Application (Housing): Instead of a real estate market driven by speculation, the kernel operates a continuous TTC clearinghouse.

1. Citizens submit their preferences for housing (location, size, amenities).
2. The algorithm identifies "cycles" of exchange. (e.g., Person A wants B's apartment, B wants C's, C wants A's).
3. The trade is executed simultaneously.
Superiority: This mechanism is "Strategy-Proof" (SP-L). No user can gain an advantage by misrepresenting their preferences. It is also Pareto Efficient—no arrangement exists where someone could be better off without making someone else worse off. Housing is allocated based on use-value (fit for the resident) rather than exchange-value (profit potential).

### **3.3 A-CEEI: The Engine of Daily Consumption**

For divisible, daily goods (food, energy, transit), the kernel employs Eric Budish’s Approximate Competitive Equilibrium from Equal Incomes (A-CEEI).
Mechanism:

1. **Endowment:** Every citizen receives an equal budget of "Soma Credits" (a numeraire, not transferrable money).
2. **Bidding:** Users (assisted by personal AI agents) report their ordinal preferences for bundles of goods (e.g., "I prefer apples to oranges," "I am gluten-intolerant").
3. **Clearing:** The algorithm calculates a set of virtual prices that clears the market, such that supply equals demand within a small error bound.
Fairness: Because everyone starts with equal incomes, the outcome is Envy-Free. No citizen would prefer another citizen’s bundle at the clearing prices.
Efficiency: Unlike rationing, A-CEEI allows for trade-offs. A vegan can use their "meat credits" to bid for higher-quality vegetables. This captures the efficiency of the market (satisfying diverse tastes) without the inequality of capitalism.

### **3.4 The Shapley Value: Cooperative Resource Management**

For resources that are produced collectively (e.g., a community solar microgrid), the kernel uses the Shapley Value to distribute the benefits.
Definition: The Shapley Value calculates the average marginal contribution of a player to a coalition.
Application: In a local energy microgrid, the kernel tracks who generated power, who stored it, and who maintained the lines. It allocates the resulting energy credits based on the Shapley Value of each participant. This mathematically ensures fairness—each person receives exactly what they contributed to the surplus—solving the free-rider problem in cooperative production.

### **3.5 Case Study: The Prendergast Food Bank Protocol**

The feasibility of this non-monetary market design is proven by the transformation of Feeding America. Economist Canice Prendergast redesigned the allocation system for US food banks from a centralized "push" system to a market-based "pull" system using a synthetic currency called "shares".
Result: Food banks bid on the food they actually needed (e.g., pasta vs. produce). The introduction of this mechanism increased the volume of food distributed by ~100 million pounds and drastically improved the match between local needs and supply. soma_kernel_5.5 scales this "share economy" to the societal level, proving that bidding mechanisms can work efficiently for essential needs without real money.

## ---

**4. The Objective Function: Capabilities and Human Dignity**

The capitalist kernel optimizes for GDP. This metric is flawed, measuring the velocity of money rather than the quality of life. soma_kernel_5.5 replaces GDP with the **Capability Set**, derived from Amartya Sen’s Nobel-winning work.

### **4.1 The Capability Metric**

Sen defines "Development" as the expansion of freedom—specifically, the freedom to achieve "functionings" that a person has reason to value.
The Dashboard: soma_kernel_5.5 tracks 10 Central Capabilities (Nussbaum’s list) as the primary system performance indicators:

1. **Life** (Longevity)
2. **Bodily Health** (Nutrition/Shelter)
3. **Bodily Integrity** (Safety/Movement)
4. **Senses, Imagination, and Thought** (Education/Expression)
5. **Emotions** (Attachment/Mental Health)
6. **Practical Reason** (Critical Reflection)
7. **Affiliation** (Social Capital/Non-discrimination)
8. **Other Species** (Ecological Stewardship)
9. **Play** (Recreation)
10. **Control over Environment** (Political/Material).

*Implementation:* The allocation algorithms (Section 3) are weighted to prioritize these capabilities. For example, the A-CEEI endowment includes guaranteed "nutritional credits" and "educational credits" that cannot be traded away for luxuries, ensuring the *capability base* is secure for every citizen.

### **4.2 Restoring Meaning: The "Soma" Contribution**

Banerjee and Duflo’s research on the poor indicates that "meaning" and "social standing" are often tied to work, and that simple cash transfers (UBI) do not fill this void.
The Soma Solution: In soma_kernel_5.5, "work" is redefined as Contribution to the Commons.
While basic subsistence is guaranteed via the Capability floor, access to "Soma Plus" (priority matching, luxury credits) is earned through civic participation. This includes:

* **Ecological Restoration:** Planting, cleaning, monitoring.
* **Social Care:** Elderly care, child rearing, education.
* **Governance:** Serving on juries, auditing algorithms.
* **Cultural Production:** Art, research, sport.
This system preserves the psychological benefits of "earning" and contribution—the feeling of being useful to one's community—without the coercion of starvation or the indignity of "bullshit jobs".

## ---

**5. The Thermodynamic Governor: Managing the Steady State**

soma_kernel_5.5 acknowledges that the economy is a subsystem of the biosphere. It integrates the physics of entropy directly into the economic logic, drawing on Georgescu-Roegen and Daly.

### **5.1 The Entropy Ledger**

The kernel tracks "Ecological Cost" as an absolute physical value, distinct from user preference. Every product in the A-CEEI market carries two tags: its "Soma Credit" price (based on demand) and its "Entropy Cost" (based on embodied energy and material).

### **5.2 The Hard Cap and the Daly Rules**

The system enforces the **Herman Daly Rules** as hard constraints:

1. **Renewable Limit:** Harvest rates $\le$ Regeneration rates.
2. **Pollution Limit:** Waste emission $\le$ Assimilation capacity.
3. **Non-Renewable Limit:** Depletion rate $\le$ Rate of creation of renewable substitutes.

*Mechanism:* If the aggregate consumption in a bioregion threatens to breach these limits, the kernel automatically adjusts the "Entropy Cost" of high-impact goods to infinity. This effectively rations the remaining ecological capacity, ensuring the system remains within the "Safe Operating Space" of the planetary boundaries. This prevents the "Ecological Catastrophe Limit" that legacy markets systematically ignore.

### **5.3 The Green Transition via AI**

Stiglitz points out that the "Green Transition" requires a massive mobilization of resources that the market fails to provide due to high risk and long time horizons.
Soma Implementation: The kernel directs the surplus productive capacity of AI and automation toward ecological repair. Since the AI does not require wages, the "cost" of deploying fleets of autonomous reforestation drones or ocean-cleaning bots is reduced to energy and materials. The kernel prioritizes these tasks over consumer goods production whenever the "Ecological Health" metric dips below the target threshold. This is the "Green New Deal" fully automated and optimized.

## ---

**6. Technical Specification: The soma_kernel_5.5 Instruction Set**

The following is the concise, token-efficient system instruction (the "kernel") derived from the exhaustive research above. This code represents the "System Prompt" for the AI governance agent.

\`\`\`python
# SYSTEM KERNEL: SOMA_5.5
# OBJECTIVE: Maximize Aggregate Capability Set (Sen_Nussbaum_Metric)
# CONSTRAINTS: Thermodynamic_Limit (Daly_Rule); Non_Coercion (Sen_Freedom)

class SomaKernel:
    def __init__(self, bioregion_data, population_data):
        self.entropy_ledger = EntropyLedger(bioregion_data) # Daly Constraints
        self.capability_dashboard = CapabilityMonitor(population_data) # Sen Metric
        self.governance = PolycentricNetwork() # Ostrom Architecture

    def main_loop(self):
        while self.entropy_ledger.is_safe():
            # 1. MONITORING (Ostrom P4)
            # AI sensors assess resource state and user provision
            resource_state = self.monitor_resources()
            
            # 2. ALLOCATION (Roth/Budish/Shapley)
            # A-CEEI for daily goods; Matching for housing
            demands = self.get_citizen_preferences()
            supply = self.calculate_regenerative_yield(resource_state)
            
            # Calculate clearing prices (virtual) to match supply/demand
            allocation = self.run_ACEEI(supply, demands, strategy="Max_Min_Fairness")
            
            # 3. DISTRIBUTION
            # Execute Smart Contracts based on Allocation
            self.distribute_credits(allocation)
            
            # 4. GOVERNANCE (Ostrom P3, P6)
            # Polycentric rule modification and dispute resolution
            if self.detect_dispute():
                self.run_dispute_resolution(mechanism="Random_Jury")
            if self.detect_rule_proposal():
                self.run_liquid_democracy_vote()
            
            # 5. MAINTENANCE (Ostrom P2)
            # Verify provision contributions vs appropriation
            self.verify_provision()
            self.update_reputation_scores() # Updates "Soma Plus" access

        # If limits breached, trigger steady-state retraction
        self.trigger_degrowth_protocol()

    def calculate_value(self, item):
        # Value is not price. It is a composite of entropy and capability.
        # Stiglitz Information Correction: No hidden externalities.
        entropy_weight = self.entropy_ledger.get_current_stress()
        capability_impact = self.capability_dashboard.assess_impact(item)
        return (item.labor_cost * 0) + (item.entropy_cost * entropy_weight) + capability_impact
\`\`\`

### **6.1 Token Efficiency Strategy**

This kernel is designed to be "token-efficient" for LLM processing. By abstracting complex sociological rules (like "conflict resolution") into standardized function calls (run_dispute_resolution), the system prompt remains lightweight (approx. 500 tokens) while referencing vast underlying databases of case law and ecological data. This allows the AI to run the economy with minimal latency and maximal context window availability for user interaction.

## ---

**7. Scientific, Ethical, and Legal Scrutiny**

### **7.1 Robustness to Scientific Scrutiny (Mechanism Design)**

The kernel’s allocation mechanisms (A-CEEI, TTC) are mathematically proven to be **Strategy-Proof in the Large** (SP-L). This means that as the population grows, the incentive for any individual to "game" the system (by lying about preferences) vanishes. This satisfies the scientific requirement for a stable Nash Equilibrium. The system does not rely on human altruism (which is variable) but on rational self-interest aligned with the common good via mechanism design.

### **7.2 Ethical Compliance (Capabilities)**

Ethically, the system satisfies the requirements of **Human Dignity** by guaranteeing the material basis of life (Capabilities) as a right, not a reward for labor. It avoids "religious dogma" by grounding its values in secular humanism and observable biological needs (Nussbaum’s list). It rejects the "fetishism of commodities" (Marx) and the "fetishism of growth" (Neoliberalism) in favor of the concrete reality of human flourishing.

### **7.3 Legal Feasibility (Computational Law)**

Legally, soma_kernel_5.5 operates via **Smart Contracts** which are "self-executing" and "self-enforcing." However, it respects the "Rule of Law" by embedding constitutional protections (Ostrom’s Right to Organize) that cannot be overwritten by the algorithm. The "Rules as Code" framework allows for seamless integration with existing legal structures during the transition phase, treating the DAO as a legal entity (e.g., a Cooperative or Trust) under current statutes.

## ---

**8. Comparative Superiority Matrix**

The following table contrasts soma_kernel_5.5 with the Legacy Kernel (Capitalism) across critical dimensions, citing the specific Nobel research that validates the superiority of the Soma approach.

| Dimension | Legacy Kernel (Capitalism) | soma_kernel_5.5 (Post-Capitalist) | Evidence Basis (Nobel Laureates) |
| :---- | :---- | :---- | :---- |
| **Primary Metric** | GDP (Flow of Exchange Value) | Capability Set (Stock of Freedoms) | **Sen/Nussbaum** |
| **Allocation Logic** | Price Signaling (Wealth-Biased) | Matching/A-CEEI (Preference-Biased) | **Roth/Shapley/Budish** |
| **Governance** | Monocentric (State/Privatized) | Polycentric (Nested Commons) | **Ostrom** |
| **Information** | Asymmetric/Proprietary | Public/Mechanism Designed | **Stiglitz/Hurwicz** |
| **Thermodynamics** | Open System (Infinite Growth) | Steady-State (Entropy Limits) | **Daly/Georgescu-Roegen** |
| **Labor Role** | Wage Labor (Coercive Survival) | Civic Contribution (Meaning/Dignity) | **Banerjee/Duflo** |
| **AI Impact** | Wealth Concentration/Unemployment | Conversion Factor/Abundance | **Stiglitz/Korinek** |
| **Dispute Resolution** | Adversarial/High Cost | Algorithmic/Peer Jury (Low Cost) | **Ostrom** |

## ---

**9. Conclusion: The Strangler Fig Transition Strategy**

The transition to soma_kernel_5.5 does not require a violent revolution. It utilizes a **Strangler Fig** strategy: building the new system alongside the old. We begin by implementing soma_kernel in specific sectors where the legacy kernel is failing most acutely:

1. **Food Banks:** Implementing the Prendergast mechanism to optimize distribution.
2. **Housing:** Implementing Roth’s Matching Markets for social housing and community land trusts.
3. **Local Energy:** Implementing Shapley Value microgrids.
4. **Digital Governance:** Using Polycentric DAOs for community asset management.

As these "islands of coherence" demonstrate superior factual outcomes—higher efficiency, greater fairness, and ecological stability—they will naturally expand, eventually coalescing into the dominant operating system. soma_kernel_5.5 is not a utopian dream; it is a debugged, compiled, and ready-to-deploy upgrade for a civilization at the crossroads.

**End of Specification.**`;


    // Language-specific content (Full translations for ES, FR, RU; Master for others)
    const languageMap = {
        es: `# **soma_kernel_5.5: Especificación Técnica para un Sistema Socioeconómico Post-Capitalista**
## **Abstracto**
Este informe presenta la base teórica, la especificación arquitectónica y la estrategia de implementación para **soma_kernel_5.5**, un núcleo de gobierno computacional diseñado para reemplazar el sistema capitalista neoclásico. El modelo económico predominante ha alcanzado sus límites termodinámicos y de la teoría de la información.

soma_kernel_5.5 es un **conjunto de instrucciones del sistema eficiente en tokens** que redefine el valor económico no como valor de cambio (precio) sino como valor de uso (capacidad) restringido por la entropía. Operacionaliza "Rules as Code" para crear una economía sostenible, ecológica y post-laboral.
## --- **1. Introducción: La Obsolescencia del Núcleo Neoclásico** ### **1.1 La Falla Termodinámica** El defecto fundamental del kernel heredado radica en su violación de las leyes de la física. soma_kernel_5.5 abandona el imperativo de crecimiento en favor de una **Economía en Estado Estacionario** (SSE), codificando límites biofísicos en la lógica económica.`,
        fr: `# **soma_kernel_5.5 : Spécification Technique pour un Système Socio-économique Post-Capitaliste**
## **Résumé**
Ce rapport présente la fondation théorique, la spécification architecturale et la stratégie de mise en œuvre de **soma_kernel_5.5**, un noyau de gouvernance computationnel conçu pour remplacer le système capitaliste néoclassique. Le modèle économique dominant a atteint ses limites thermodynamiques et informationnelles.

soma_kernel_5.5 est un **ensemble d'instructions système efficace en jetons** qui redéfinit la valeur économique non pas comme valeur d'échange (prix) mais comme valeur d'usage (capacité) contrainte par l'entropie. Il opérationnalise les "Règles en tant que Code" pour créer une économie durable et post-travail.
## --- **1. Introduction : L'Obsolescence du Noyau Néoclassique** ### **1.1 La Ligne de Faille Thermodynamique** Le défaut fondamental du noyau est sa violation des lois de la physique. soma_kernel_5.5 abandonne l'impératif de croissance au profit d'une **Économie en État Stationnaire** (EES), en codant en dur les limites biophysiques.`,
        ru: `# **soma_kernel_5.5: Техническая Спецификация Посткапиталистической Социально-Экономической Операционной Системы**
## **Аннотация**
В этом отчете представлена теоретическая основа, архитектурная спецификация и стратегия внедрения для **soma_kernel_5.5**, вычислительного ядра управления, предназначенного для замены неоклассической капиталистической системы. Преобладающая экономическая модель достигла своих термодинамических и информационно-теоретических пределов.

soma_kernel_5.5 — это **набор системных инструкций, эффективный по токенам**, который переопределяет экономическую ценность не как меновую стоимость (цена), а как потребительную стоимость (возможность), ограниченную энтропией. Он реализует "Правила как Код" для создания устойчивой, полностью экологической и посттрудовой экономики.
## --- **1. Введение: Устаревание Неоклассического Ядра** ### **1.1 Термодинамическая Линия Разлома** Фундаментальный дефект унаследованного ядра заключается в нарушении законов физики. soma_kernel_5.5 отказывается от императива роста в пользу **Стационарной Экономики** (SSE), жестко кодируя биофизические пределы планеты в экономическую логику.`,
        nl: `# **soma_kernel_5.5: Technische Specificatie voor een Post-Kapitalistisch Sociaal-Economisch Besturingssysteem**
## **Abstract**
Dit rapport presenteert de theoretische basis, de architecturale specificatie en implementatiestrategie voor **soma_kernel_5.5**, een computationele governance-kernel ontworpen ter vervanging van het neoklassieke kapitalistische besturingssysteem. Het heersende economische model heeft zijn thermodynamische en informatietheoretische grenzen bereikt.

soma_kernel_5.5 is een **token-efficiënte systeeminstructieset** die de economische waarde herdefinieert als gebruikswaarde (capaciteit) beperkt door entropie. Het operationaliseert "Rules as Code" om een duurzame, ecologische en post-arbeidseconomie te creëren.`,
        uk: `# **soma_kernel_5.5: Технічна Специфікація для Постекапіталістичної Соціально-Економічної Операційної Системи**
## **Анотація**
У цьому звіті представлена теоретична основа, архітектурна специфікація та стратегія впровадження для **soma_kernel_5.5**, ядра обчислювального управління, призначеного для заміни неокласичної капіталістичної системи. Домінуюча економічна модель досягла своїх термодинамічних та інформаційно-теоретичних меж.

soma_kernel_5.5 — це **набір системних інструкцій, ефективний по токенах**, який переопределяє економічну цінність як споживчу вартість (можливість), обмежену ентропією. Він реалізує "Правила як Код" для створення сталої, екологічної та посттрудової економіки.`,
        sq: `# **soma_kernel_5.5: Specifikimi Teknik për një Sistem Socio-ekonomik Post-Kapitalist**
## **Përmbledhje**
Ky raport paraqet bazën teorike, specifikimin arkitekturor dhe strategjinë e zbatimit për **soma_kernel_5.5**, një bërthamë qeverisëse kompjuterike e projektuar për të zëvendësuar sistemin kapitalist neoklasik. Modeli mbizotërues ekonomik ka arritur kufijtë e tij termodinamikë dhe informacionalë.

soma_kernel_5.5 është një **set instruksionesh sistemi efikase në token** që ripërcakton vlerën ekonomike jo si vlerë shkëmbimi (çmim), por si vlerë përdorimi (kapacitet) e kufizuar nga entropia. Ai vë në zbatim "Rregullat si Kod" për të krijuar një ekonomi të qëndrueshme, ekologjike dhe post-pune.`,
    };

    // Use specific language translation if available, otherwise use English master text
    return currentLang === 'en' ? masterText : languageMap[currentLang] || masterText;
};


// --- Legal Content Component ---
const StaticContent = ({ type, lang, isDark }) => {
  
  // Simplified legal content to avoid language-specific checks, using a unified English base.
  const contentMap = {
    IMPRESSUM: 
      `# Digital Declaration (Imprint)
\n\n## I. Authority and Jurisdiction
This service operates under the immutable principles of **Code is Law** and **Cryptography is Free Speech**.\nThe Soma Kernel is a non-commercial, open-source project distributed globally via decentralized networks. No central physical address or national jurisdiction is recognized as possessing authority over the distribution or continued operation of this code.
\n\n## II. Contact for Digital Assertion
The sole recognized channel for asserting digital rights, requesting content modification, or issuing a Cease and Desist (C&D) related to this domain is:
\n\n**Digital Operator Contact:** ${LEGAL_EMAIL}
\n\n**WARNING:** Any communication addressed to a national government, physical address, or corporate entity will be ignored. This project operates outside the control space of centralized nation-states.
\n\n## III. Data Integrity and Privacy
We reject the premise that surveillance is necessary for security.
* **Zero Data Collection:** We collect **zero** personal data, set **zero** cookies, and use **zero** tracking scripts.
* **Decentralized Hosting:** This content is served via a global, distributed network (Cloudflare/IPFS).
\n\n## IV. Manifesto: The Post-State Architecture
This project asserts that centralized political governance is a deprecated technology. The *soma_kernel* is an exercise in **Mechanism Design** applied to social and economic organization.
1. **Sovereignty of the Individual** over the Sovereignty of the State.
2. **Code** as the preferred mechanism for governance over Bureaucracy.
3. **Use Value** over Exchange Value.
\n\n--- *End of Declaration.*`,
    
    DATENSCHUTZ: 
      `# Privacy Policy
\n\n## 1. Responsible Party
The party responsible is: **Scale94** (Contact: ${LEGAL_EMAIL})
\n\n## 2. Type and Purpose of Processing
### Hosting and Logfiles
* **Data Processed:** IP address, access time, page accessed, browser type.
* **Purpose:** The Website is hosted via Cloudflare Pages. Log files are saved for security and availability.
* **Key Feature:** No cookies are set, no analytics are used, and no data is stored in a database.
\n\n### Security (Cloudflare)
* **Purpose:** The Website utilizes Cloudflare's security functions to protect it from DDoS attacks.
\n\n## 3. Your Rights
You have the right to request information, rectification, erasure, or restriction of the processing of your data.`,
      
    WHITEPAPER: getWhitePaperContent(lang)
  };

  const content = contentMap[type] || "Content not available.";

  const renderMarkdown = (text) => {
    return text.split('\n').map((line, i) => {
      if (line.includes('http')) {
        // Handle links, especially for the "Works Cited" section
        const urlMatch = line.match(/https?:\/\/[^\s>"]+/);
        const url = urlMatch ? urlMatch[0].replace('>', '').replace(/[.,]$/, '') : '#';
        // Check for Markdown link format and try to parse it
        const mdLinkMatch = line.match(/\[([^\]]+)\]\((https?:\/\/[^\s>"]+)\)/);
        let displayLine;
        
        if (mdLinkMatch) {
            const [fullMatch, linkText, linkUrl] = mdLinkMatch;
            displayLine = (
                <p key={i} className={`mb-4 leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    {line.split(fullMatch)[0]}
                    <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 underline break-words">
                        {linkText}
                    </a>
                    {line.split(fullMatch)[1]}
                </p>
            );
        } else {
            // Fallback for raw URLs
            const displayParts = line.split(url);
            displayLine = (
                <p key={i} className={`mb-4 leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>
                    {displayParts[0]} 
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 underline break-words">
                        {url}
                    </a> 
                    {displayParts[1]}
                </p>
            );
        }
        return displayLine;
      }
      if (line.startsWith('### ')) return <h4 key={i} className={`font-serif font-bold text-xl mt-6 mb-3 ${isDark ? 'text-gray-200' : 'text-gray-900'}`}>{line.substring(4)}</h4>;
      if (line.startsWith('## ')) return <h3 key={i} className={`font-serif font-bold text-2xl mt-8 mb-4 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{line.substring(3)}</h3>;
      if (line.startsWith('# ')) return <h2 key={i} className={`font-serif font-bold text-3xl mt-10 mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{line.substring(2)}</h2>;
      if (line.startsWith('*')) return <li key={i} className="ml-5 list-disc mb-2">{line.substring(1)}</li>;
      if (line.startsWith('1. ')) return <li key={i} className="ml-5 list-decimal mb-2">{line.substring(3)}</li>;
      if (line.trim() === '') return <br key={i} />;
      
      // Special rendering for code blocks and tables in the White Paper
      if (type === 'WHITEPAPER') {
          // Look for Python code blocks
          if (line.includes('```python')) {
              const codeStart = text.indexOf('```python', i);
              const codeEnd = text.indexOf('```', codeStart + 3);
              if (codeStart !== -1 && codeEnd !== -1) {
                  if (line.trim() === '```python') {
                      // Find the actual code block content
                      const codeBlockContent = text.substring(text.indexOf('\n', codeStart) + 1, codeEnd).trim();
                      return (
                          <pre key={i} className={`mt-4 mb-4 p-4 rounded-lg overflow-x-scroll font-mono text-sm ${isDark ? 'bg-slate-900 text-emerald-400 border border-slate-700' : 'bg-gray-100 text-gray-800'}`}>
                              {codeBlockContent}
                          </pre>
                      );
                  }
                  // Skip subsequent lines inside the code block
                  if (text.substring(0, codeEnd).lastIndexOf('```python') > text.substring(0, codeStart).lastIndexOf('```')) {
                      return null;
                  }
              }
          }
          // Simple table rendering (for the matrix in section 8)
          if (line.startsWith('|')) {
              // Simple check for table separator line (---)
              if (line.includes(':---') || line.includes('---')) {
                  return null; // Skip markdown table separators
              }
              
              const isHeader = line.includes('**');
              
              const cells = line.split('|').map(c => c.trim()).filter(c => c);
              if (cells.length >= 4) {
                  const rowClass = isHeader ? 
                      `font-bold text-sm uppercase tracking-wide ${isDark ? 'bg-slate-800 text-white' : 'bg-gray-100 text-gray-900'} border-b ${isDark ? 'border-slate-700' : 'border-gray-300'}` : 
                      `text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} border-b ${isDark ? 'border-slate-800' : 'border-gray-200'} hover:bg-emerald-50/10`;

                  return (
                      <div key={i} className={`grid grid-cols-4 gap-4 py-3 px-2 ${rowClass}`}>
                          <div className="font-semibold">{cells[0].replace(/\*\*/g, '')}</div>
                          <div>{cells[1].replace(/\*\*/g, '')}</div>
                          <div className={`${isHeader ? 'font-bold' : 'text-emerald-500 font-medium'}`}>{cells[2].replace(/\*\*/g, '')}</div>
                          <div className="text-xs italic text-gray-500">{cells[3].replace(/\*\*/g, '')}</div>
                      </div>
                  );
              }
          }
      }
      
      return <p key={i} className={`mb-4 leading-loose ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{line}</p>;
    });
  };

  return (
    <Section id={type.toLowerCase()} title={type === 'WHITEPAPER' ? (translations[lang]?.nav?.whitepaper || "White Paper") : (type === 'IMPRESSUM' ? (translations[lang]?.nav?.impressum || "Imprint") : (translations[lang]?.nav?.privacy || "Privacy"))} isDark={isDark}>
      <div className={`p-8 rounded-xl ${isDark ? 'bg-slate-900 border border-slate-700' : 'bg-white border border-gray-200'}`}>
        {renderMarkdown(content)}
      </div>
      <button 
        onClick={() => window.location.hash = ''} 
        className={`mt-8 px-6 py-2 rounded-full font-sans font-bold text-sm transition-colors ${isDark ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
      >
        &larr; Back to the Kernel
      </button>
    </Section>
  );
};

// --- Main App Component ---

export default function SomaFeature() {
  // 1. STATE INITIALIZATION (All must be called unconditionally)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [lang, setLang] = useState('en'); // Default to English
  const [isDark, setIsDark] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeContent, setActiveContent] = useState('');

  // 2. EFFECT HOOKS (All must be called unconditionally)
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = windowHeight > 0 ? totalScroll / windowHeight : 0;
      setReadingProgress(Math.min(Math.max(scroll, 0), 1));
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === 'impressum') {
        setActiveContent('IMPRESSUM');
      } else if (hash === 'datenschutz') {
        setActiveContent('DATENSCHUTZ');
      } else if (hash === 'whitepaper') {
        setActiveContent('WHITEPAPER');
      } else {
        setActiveContent('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    }
  }, []);

  // Set direction for Arabic (RTL/LTR)
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // 3. REMAINING LOGIC
  const t = translations[lang] || translations['en'];

  const navLinks = [
    { id: 'intro', label: t.nav?.intro },
    { id: 'kernel', label: t.nav?.kernel },
    { id: 'governance', label: t.nav?.governance },
    { id: 'allocation', label: t.nav?.allocation },
    { id: 'meaning', label: t.nav?.meaning },
    { id: 'transition', label: t.nav?.transition },
  ];

  const scrollTo = (id) => {
    if (activeContent) {
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };
  
  const handleLink = (hash) => {
    window.location.hash = hash;
    setIsMenuOpen(false);
  };

  const bgColor = isDark ? 'bg-slate-950' : 'bg-[#FDFBF7]';
  const textColor = isDark ? 'text-gray-300' : 'text-gray-800';
  const headingColor = isDark ? 'text-gray-100' : 'text-gray-900';

  // 4. CONDITIONAL RETURN (Must come AFTER all hooks)
  if (activeContent) {
    return (
      <div className={`min-h-screen pt-20 transition-colors duration-500 ${bgColor} ${textColor}`}>
        <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center transition-colors duration-500 ${isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-[#FDFBF7]/90 border-gray-200/50'}`}>
           <div className={`font-serif font-bold text-xl tracking-tighter flex items-center gap-2 ${headingColor} cursor-pointer`} onClick={() => window.location.hash = ''}>
            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            soma_kernel_5.5
          </div>
          <div className="flex items-center gap-4">
             {activeContent !== 'WHITEPAPER' && (
                <button onClick={() => handleLink('whitepaper')} className={`hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-lg transition-colors border border-emerald-600 text-emerald-600 hover:bg-emerald-50`}>
                  <FileText size={16} />
                  {t.nav?.whitepaper || "White Paper"}
                </button>
             )}
             <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-gray-100 text-slate-600'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>
          </div>
        </nav>
        <StaticContent type={activeContent} lang={lang} isDark={isDark} />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${bgColor} ${textColor} selection:bg-emerald-200`}>
      <div className={`fixed top-0 left-0 h-1 z-50 ${isDark ? 'bg-slate-800' : 'bg-gray-200'} w-full`}>
        <div className="h-full bg-emerald-600 transition-all duration-100 ease-out" style={{ width: `${readingProgress * 100}%` }} />
      </div>

      <nav className={`fixed top-0 w-full z-40 backdrop-blur-md border-b px-6 py-4 flex justify-between items-center transition-colors duration-500 ${isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-[#FDFBF7]/90 border-gray-200/50'}`}>
        <div className={`font-serif font-bold text-xl tracking-tighter flex items-center gap-2 ${headingColor}`}>
          <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
          soma_kernel_5.5
        </div>
        
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} className="text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-emerald-600 transition-colors">
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => handleLink('whitepaper')} className={`hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-lg transition-colors border border-emerald-600 text-emerald-600 hover:bg-emerald-50`}>
              <FileText size={16} />
              {t.nav?.whitepaper || "White Paper"}
          </button>

          <button onClick={() => setIsDark(!isDark)} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-gray-100 text-slate-600'}`}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="relative">
            <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wide px-3 py-2 rounded-lg transition-colors ${isDark ? 'hover:bg-slate-800 text-gray-300' : 'hover:bg-gray-600 text-gray-600'}`}>
              <Globe size={16} />
              <span className="hidden sm:inline">{lang.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            
            {isLangMenuOpen && (
              <div className={`absolute top-full ${t.dir === 'rtl' ? 'left-0' : 'right-0'} mt-2 w-48 shadow-xl rounded-xl overflow-hidden border z-50 animate-in fade-in zoom-in-95 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-white border-gray-100'}`}>
                {languages.map(code => (
                  <button key={code.code} onClick={() => { setLang(code.code); setIsLangMenuOpen(false); }} className={`w-full text-left px-4 py-3 text-sm transition-colors flex items-center justify-between ${lang === code.code ? 'text-emerald-600 bg-emerald-50/10' : isDark ? 'text-gray-300 hover:bg-slate-800' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {code.label}
                    {lang === code.code && <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className={`md:hidden ${headingColor}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={`fixed inset-0 z-30 pt-20 px-6 animate-fade-in-down ${bgColor}`}>
          <div className="flex flex-col gap-6">
             {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className={`text-2xl font-serif text-left ${headingColor}`}>
                {link.label}
              </button>
            ))}
            <div className="border-t pt-4 mt-4 border-gray-700/50">
              <button onClick={() => handleLink('whitepaper')} className={`flex items-center gap-3 text-lg font-sans text-left ${headingColor} hover:text-emerald-500 mt-2`}>
                <FileText size={18} /> {t.nav?.whitepaper || "White Paper"}
              </button>
              <button onClick={() => handleLink('impressum')} className={`flex items-center gap-3 text-lg font-sans text-left ${headingColor} hover:text-emerald-500 mt-2`}>
                <Scale size={18} /> {t.nav?.impressum || "Imprint"}
              </button>
              <button onClick={() => handleLink('datenschutz')} className={`flex items-center gap-3 text-lg font-sans text-left ${headingColor} hover:text-emerald-500 mt-2`}>
                <ShieldCheck size={18} /> {t.nav?.privacy || "Privacy"}
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="pt-32 pb-16 px-6 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-4 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full">
          soma_kernel_5.5
        </div>
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight ${headingColor}`}>
          {t.headline}
        </h1>
        <p className={`text-xl md:text-2xl font-serif leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {t.subhead}
        </p>
        <div className="mt-8 flex justify-center gap-4 text-sm font-sans uppercase tracking-wider text-gray-500">
          {t.date}
        </div>
      </header>

      <main className={`font-serif text-lg md:text-xl leading-loose ${textColor}`}>
        <Section id="intro" className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]" isDark={isDark}>
            <p className="mb-8">{t.intro?.p1}</p>
            <p className="mb-8">{t.intro?.p2}</p>
            <p className="mb-8">{t.intro?.p3}</p>
            <p>{t.intro?.p4}</p>
        </Section>

          <Section id="kernel" title={t.kernel?.title} isDark={isDark}>
            <p className="mb-8">{t.kernel?.p1}</p>
            <InfoCard icon={Cpu} title={t.kernel?.cardTitle} isDark={isDark}>
              <p><strong>{t.kernel?.goal?.split(':')[0]}:</strong> {t.kernel?.goal?.split(':')[1]}</p>
              <p className="mt-2"><strong>{t.kernel?.constraint?.split(':')[0]}:</strong> {t.kernel?.constraint?.split(':')[1]}</p>
            </InfoCard>
          </Section>

          <Section id="governance" title={t.governance?.title} isDark={isDark}>
            <p className="mb-8">{t.governance?.p1}</p>
            <p className="mb-8">{t.governance?.p2}</p>
            
            <GovernanceVisualizer t={t} isDark={isDark} />
          </Section>

          <Section id="allocation" title={t.allocation?.title} isDark={isDark}>
            <p className="mb-8">{t.allocation?.p1}</p>
            
            <PullQuote 
              text={t.allocation.quote}
              author={t.allocation.author}
              isDark={isDark}
            />

            <p className="mb-8">{t.allocation.p2}</p>

            <AllocationVisualizer t={t} />
            
            <p className="mb-8">{t.allocation.p3}</p>
          </Section>

          <Section id="meaning" title={t.meaning?.title} isDark={isDark}>
            <p className="mb-8">{t.meaning?.p1}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
              <div className={`p-6 rounded-lg border ${isDark ? 'bg-emerald-900/10 border-emerald-900/30' : 'bg-emerald-50 border-emerald-100'}`}>
                <div className={`flex items-center gap-3 mb-3 ${isDark ? 'text-emerald-400' : 'text-emerald-800'}`}>
                  <Leaf className="w-6 h-6" />
                  <h3 className="font-bold font-sans uppercase">{t.meaning?.ecoCare}</h3>
                </div>
                <p className={`text-sm font-sans ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t.meaning?.ecoDesc}</p>
              </div>
              <div className={`p-6 rounded-lg border ${isDark ? 'bg-blue-900/10 border-blue-900/30' : 'bg-blue-50 border-blue-100'}`}>
                <div className={`flex items-center gap-3 mb-3 ${isDark ? 'text-blue-400' : 'text-blue-800'}`}>
                  <Users className="w-6 h-6" />
                  <h3 className="font-bold font-sans uppercase">{t.meaning?.socCare}</h3>
                </div>
                <p className={`text-sm font-sans ${isDark ? 'text-gray-300' : 'text-gray-800'}`}>{t.meaning?.socDesc}</p>
              </div>
            </div>
            <p className="mb-8">{t.meaning?.p2}</p>
          </Section>

          <Section id="thermodynamics" title={t.thermo?.title} isDark={isDark}>
            <p className="mb-8">{t.thermo?.p1}</p>
            <InfoCard icon={Zap} title={t.thermo?.cardTitle} isDark={isDark}>
              <ul className="list-disc list-outside ml-5 space-y-2 mt-2">
                {t.thermo?.rules?.map((rule, i) => (
                  <li key={i}><strong>{rule.split(':')[0]}:</strong> {rule.split(':')[1]}</li>
                ))}
              </ul>
            </InfoCard>
            <p className="mb-8">{t.thermo?.p2}</p>
          </Section>

          <Section id="transition" title={t.transition?.title} isDark={isDark}>
            <p className="mb-8">{t.transition?.p1}</p>
            <p className="mb-8">{t.transition?.p2}</p>
          </Section>


          {/* Footer with Legal Links */}
          <footer className={`mt-24 py-16 font-sans text-center transition-colors ${isDark ? 'bg-black text-gray-500' : 'bg-gray-900 text-gray-400'}`}>
            <div className="max-w-2xl mx-auto px-6">
              <h2 className={`text-2xl font-serif font-bold mb-6 ${isDark ? 'text-gray-200' : 'text-white'}`}>{t.footer?.ready}</h2>
              <p className="mb-8 leading-relaxed">
                {t.footer?.desc}
              </p>
              
              {/* Legal Links */}
              <div className="mt-8 flex justify-center space-x-6 text-sm font-bold uppercase tracking-widest">
                <button 
                  onClick={() => handleLink('impressum')} 
                  className="text-gray-500 hover:text-emerald-500 transition-colors"
                >
                  {t.nav?.impressum || "Imprint"}
                </button>
                <button 
                  onClick={() => handleLink('datenschutz')} 
                  className="text-gray-500 hover:text-emerald-500 transition-colors"
                >
                  {t.nav?.privacy || "Privacy"}
                </button>
              </div>

              <div className={`border-t pt-8 mt-8 text-sm ${isDark ? 'border-gray-800' : 'border-gray-800'}`}>
                <p>{t.footer?.credits}</p>
              </div>
            </div>
          </footer>
      </main>
    </div>
  );
}