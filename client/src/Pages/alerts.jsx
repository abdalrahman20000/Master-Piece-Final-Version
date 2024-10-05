import React from 'react';

const alertData = [
  {
    message: 'Alert: This is a sample alert message. Please take note of this important information.',
    action: 'Action 1'
  },
  {
    message: 'Alert: Another important message to consider. Make sure you understand the implications.',
    action: 'Action 2'
  },
  {
    message: 'Alert: Remember to check your settings and preferences regularly to stay updated.',
    action: 'Action 3'
  }
];

const alertContainerClasses = 'bg-card p-4 rounded-lg shadow-md border border-border';
const buttonClasses = 'mt-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded';
const textClasses = 'text-muted-foreground';

const Alert = () => {
  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-bold text-primary">Alerts</h2>
      <div className="mt-4 space-y-4">
        {alertData.map((alert, index) => (
          <div key={index} className={alertContainerClasses}>
            <p className={textClasses}>{alert.message}</p>
            <button className={buttonClasses}>{alert.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alert;

