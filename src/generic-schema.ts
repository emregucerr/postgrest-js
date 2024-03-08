typescript
// src/generic-schema.ts

export type SingleValuePostgreSQLTypes = 'bigint' | 'boolean' | 'date' | 'integer' | 'numeric' | 'text' | 'uuid';
export type ArrayPostgreSQLTypes = 'bigint[]' | 'boolean[]' | 'date[]' | 'integer[]' | 'numeric[]' | 'text[]' | 'uuid[]';

export interface TableSchema {
  columns: Record<string, SingleValuePostgreSQLTypes | ArrayPostgreSQLTypes>;
  Relationships: {
    [relationshipName: string]: {
      target: string;
      type: 'OneToMany' | 'OneToOne';
      foreignKey: string;
    }
  };
}

export interface ViewSchema {
  // This can mirror the TableSchema if views need similar structuring
  // Placeholder implementation for potential future extension
}

export type GenericSchema = {
  Tables: {
    [tableName: string]: TableSchema;
  };
  Views?: {
    [viewName: string]: ViewSchema;
  };
};
