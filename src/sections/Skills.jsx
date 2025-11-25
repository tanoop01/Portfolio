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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.categories.map((category, categoryIndex) => (
          <Card key={categoryIndex} className="p-6">
            <h3 className="text-xl font-bold text-white mb-6 text-center">
              {category.name}
            </h3>
            <motion.div
              className="space-y-4"
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
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors group"
                  >
                    <Icon
                      className={`w-8 h-8 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <h4 className="font-medium text-white">
                      {skill.name}
                    </h4>
                  </motion.div>
                );
              })}
            </motion.div>
          </Card>
        ))}
      </div>

      {/* Currently Learning Section */}
      <div className="mt-16">
        <Card className="p-8" gradient>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
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
                  className="flex flex-col items-center gap-3 p-4 rounded-lg bg-gray-800/10 backdrop-blur-md hover:bg-gray-800/20 transition-colors group border border-gray-700/20"
                >
                  <div className="relative">
                    <Icon
                      className={`w-10 h-10 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  </div>
                  <span className="text-sm font-medium text-center text-gray-300">
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
