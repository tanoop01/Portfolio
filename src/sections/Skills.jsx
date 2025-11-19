import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { skillsData } from '../data/skillsData';
import { staggerContainer, slideUp } from '../utils/animations';

const Skills = () => {
  return (
    <SectionWrapper id="skills" background="default">
      <SectionTitle
        title={skillsData.title}
        subtitle={skillsData.description}
      />

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillsData.categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center lg:text-left">
              {category.name}
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, skillIndex) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skillIndex}
                    variants={slideUp}
                  >
                    <Card className="p-6 text-center group cursor-pointer h-full">
                      <Icon
                        className={`w-12 h-12 mx-auto mb-3 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                      />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h4>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div className="mt-16">
        <Card className="p-8" gradient>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Currently Learning
          </h3>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.learning.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={slideUp}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-colors group"
                >
                  <div className="relative">
                    <Icon
                      className={`w-10 h-10 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
